import { useBlog } from "../hooks/useBlog";
import BlogCard from "../components/blog/BlogCard";
import BlogSkeletonGrid from "../components/blog/BlogSkeletonGrid";
import ErrorState from "../components/ui/ErrorState";
import PostCardSkeleton from "../components/blog/BlogCardSkeleton";
import NoBlog from "../components/blog/NoBlog";

const PER_PAGE = 8;

function BlogListing() {
  const { posts, loading, error, loadingMore,  loadMore,hasMore } = useBlog();

  console.log({ posts, loading });

  if (loading ) return <BlogSkeletonGrid />;
  if (error) return <ErrorState onRetry={loadMore} />;
  if ( !posts) return <NoBlog/>
  

 return (
  <main className="bg-white min-h-screen">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {posts.map(post => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          excerpt={post.description}
          image={post.cover_image}
          category={post.tag_list?.[0]}
          author={{
            name: post.user.name,
            avatar: post.user.profile_image,
          }}
        />
      ))}

      {loadingMore &&
        Array.from({ length: PER_PAGE }).map((_, id) => (
          <PostCardSkeleton key={`loading-${id}`} />
        ))}
    </div>

         {hasMore && (
    <div className="flex justify-end px-3 mt-8">
      <button
        onClick={loadMore}
        disabled={loadingMore}
        className="cursor-pointer text-lg font-semibold text-brand-500 underline hover:text-brand-600 disabled:opacity-50"
      >
        {loadingMore ? "Loading..." : "Load more"}
      </button>
    </div>
  )}
     
  </main>
);
}

export default BlogListing;
