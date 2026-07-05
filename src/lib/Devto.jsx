// lib/devto.js
  export async function getArticles(signal) {
    const res = await fetch('https://dev.to/api/articles?per_page=9', { signal });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
  }