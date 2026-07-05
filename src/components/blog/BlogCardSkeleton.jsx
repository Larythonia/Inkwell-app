function BlogCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-xl aspect-[4/3] w-full" />
      <div className="mt-4 h-3 bg-gray-200 rounded w-1/3" />
      <div className="mt-3 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-2/3" />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-6 w-6 bg-gray-200 rounded-full" />
        <div className="h-3 bg-gray-200 rounded w-20" />
      </div>
    </div>
  );
}

export default BlogCardSkeleton;