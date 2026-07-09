import BlogCardSkeleton from "./BlogCardSkeleton";

function BlogSkeletonGrid({ count = 8 }) {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, id) => (
        <BlogCardSkeleton key={id} />
      ))}
    </div>
    </main>
    
  );
}

export default BlogSkeletonGrid;