
function PostSkeleton() {
  return (
    <div className="min-w-[80vw] mx-auto px-4 py-8 animate-pulse">
     
      <div className="h-4 bg-gray-200 rounded w-28 mb-6" />

      <div className="w-full aspect-[16/7] bg-gray-200 rounded-2xl mb-6" />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-24" />
            <div className="h-3 bg-gray-200 rounded w-16" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 bg-gray-200 rounded w-20" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-gray-200" />
          ))}
        </div>
      </div>

      {/* title */}
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-6" />

      {/* body — flat lines */}
      <div className="space-y-4">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="h-3 bg-gray-200 rounded w-full" />
        ))}
      </div>
    </div>
  );
}

export default PostSkeleton;