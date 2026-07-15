import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BlogCard({ id, title, excerpt, image, author }) {
  const authorName = author?.name ?? "Unknown author";
  const authorAvatar = author?.avatar ?? "/default-avatar.png";
  const navigate = useNavigate();

  const handleRead = () => {
    navigate(`/blog/${id}`);
  };

  const trimText = (text, maxLength = 80) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="h-full flex flex-col border-2 border-brandg-100 rounded-3xl transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="aspect-[4/3] w-full object-cover border-brandg-100 rounded-3xl"
      />

      <div className="flex flex-1 flex-col px-4">
        <h2 className="mt-2 text-sm leading-none font-medium text-black line-clamp-2 min-h-[1.6rem]">
          {title}
        </h2>

        <p className="lg:min-h-14 sm:h-6 overflow-hidden break-words text-xs py-1 text-black">
          {trimText(excerpt)}
        </p>

          <div className=" flex items-center gap-2 min-h-[1rem]">
            <img
              src={authorAvatar}
              alt={authorName}
              loading="lazy"
              className="h-5 w-5 rounded-full object-cover"
            />
            <span className="text-xs text-black">{authorName}</span>
          </div>

           <div className="mb-1 flex justify-end items-center gap-1 text-brand-500 hover:text-brand-600">
  <p
    onClick={handleRead}
    className="text-xs font-medium cursor-pointer leading-none text-center"
  >
    Read
  </p>
  <ArrowRight className="w-4 h-4 pb-0.5" />
</div>
      </div>
    </div>
  );
}

export default BlogCard;
