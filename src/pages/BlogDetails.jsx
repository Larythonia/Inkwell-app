
import { useParams, useNavigate } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import { ArrowLeft } from 'lucide-react';
import ErrorState from '../components/ui/ErrorState';
import PostAuthor from '../components/post/PostAuthor';
import { formatDate } from '../utils/helper';
import PostBody from '../components/post/PostBody';
import RelatedPosts from '../components/post/RelatedPosts';
import PostSkeleton from '../components/post/PostSkeleton';
import NoPost from '../components/post/NoPost';

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {post, error, loading} = usePost(id);

  console.log('body_html:', post?.body_html);

  if (loading) return <PostSkeleton/>;
  if (error) return <ErrorState />
  if (!post) return <NoPost/>

  console.log(loading, error, post)

  return (
    <main className=''>
      <div className="">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-brand-500 hover:text-brand-600 mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to post
      </button>

      <img
        src={post.cover_image}
        alt={post.title}
        className="w-full rounded-2xl aspect-[16/7] object-cover mb-6"
      />
      <PostAuthor author={{name: post.user.name, avatar: post.user.profile_image}}
      publishedDate={formatDate(post.published_at)}
      />
      <PostBody title={post.title} bodyHtml={post.body_html} />
      
      <RelatedPosts username={post.user.username} excludeId={post.id} />
    </div>
    </main>
  );
}

export default BlogDetails;