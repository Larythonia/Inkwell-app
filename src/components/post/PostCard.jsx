import { useNavigate } from "react-router-dom";

function PostCard({
  id, title, excerpt,image,author, publishedDate,readTime,}) {
  const authorName = author?.name ?? "Unknown author";
  const authorAvatar = author?.avatar ?? "/default-avatar.pn";
  const navigate = useNavigate();

  const handleRead = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      onClick={handleRead}
      className="bg-brandr-50 cursor-pointer transition-transform duration-300 hover:scale-105 p-4"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-40 aspect-[4/3] p-2 rounded-2xl"
      />

      <div className="">
        <div className="flex justify-between pt-2">
          {publishedDate && (
            <p className="text-[10px] text-black">{publishedDate}</p>
          )}

          {readTime && (
            <p className="text-[10px] pr-12 text-black">{readTime} mins read</p>
          )}
        </div>

        <h2 className="pt-3 text-sm min-h-[3.5rem] font-semibold text-black line-clamp-1">
          {title}
        </h2>

        <p className="text-xs pt-2 text-black line-clamp-3 min-h-[3.5rem]">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 min-h-[2rem]">
          <img
            src={authorAvatar}
            alt={authorName}
            loading="lazy"
            className="h-5 w-5 rounded-full object-cover"
          />

          <p className="text-sm text-black font-semibold">
            {authorName}

            <span className="px-1">.</span>
          </p>
          <span onClick={handleRead} className="text-black text-xs">
            {" "}
            Writer
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
