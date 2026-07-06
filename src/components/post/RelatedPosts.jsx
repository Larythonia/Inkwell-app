
import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { formatDate } from '../../utils/helper';

function RelatedPosts({ username, excludeId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchByAuthor() {
      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=${username}&per_page=5`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setPosts(data.filter(post => post.id !== excludeId));
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchByAuthor();
    return () => controller.abort();
  }, [username, excludeId]);

  if (loading || posts.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-lg font-bold text-black mb-4">More from this writer</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {posts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.description}
            image={post.cover_image}
            category={post.tag_list?.[0]}
            author={{ name: post.user.name, avatar: post.user.profile_image }}
            publishedDate={formatDate(post.readable_publish_date)}
            readTime={post.reading_time_minutes}
          className='bg-brandr-100'
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;