// hooks/usePost.js
import { useState, useEffect } from 'react';

export function usePost(id) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    async function fetchPost() {
      try {
        setLoading(true);
        const res = await fetch(`https://dev.to/api/articles/${id}`, {
        
        });
        if (!res.ok) throw new Error('Failed to fetch post');
        const data = await res.json();
        setPost(data);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  return { post, loading, error };
}