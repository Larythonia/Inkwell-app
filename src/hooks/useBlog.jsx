
import { useState, useEffect } from 'react';

const PER_PAGE = 8;

export function useBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  
  useEffect(() => {

    async function fetchPosts(pageToLoad) {
      try {
        pageToLoad === 1 ? setLoading(true) : setLoadingMore(true);

         const minLoadTime = new Promise(resolve => setTimeout(resolve, 100));

        const [res] = await Promise.all([
          fetch(`https://dev.to/api/articles?per_page=${PER_PAGE}&page=${pageToLoad}`, {
  
          }),
          minLoadTime
        ]);

        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();

        if (pageToLoad === 1) {
          setPosts(data);
        } else {
          setPosts(prev => [...prev, ...data]);
        }

        setHasMore(data.length === PER_PAGE);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    }

    fetchPosts(page);
  }, [page]);

    function loadMore() {
    if (!loadingMore && hasMore) {
      setPage(prev => prev + 1);
    }
  }

  return { posts, loading, error, loadingMore, hasMore, loadMore };
}