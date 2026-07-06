import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BlogCard({ id, title, excerpt, image, author}) {
  const authorName = author?.name ?? "Unknown author";
  const authorAvatar = author?.avatar ?? "/default-avatar.png"; 
  const navigate = useNavigate();
  
  const handleRead = () => {
  navigate(`/blog/${id}`);
  };

  return (
    <div className='h-full flex flex-col border-3 border-brandg-100 rounded-4xl transition-transform duration-300 hover:scale-105'>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="rounded-xl aspect-[4/3] w-full object-cover"
      />

      <div className="flex flex-1 flex-col pl-2 pr-4">
        <h2 className="mt-2 text-sm leading-none font-medium text-black line-clamp-2 min-h-[1.6rem]">
          {title}
        </h2>

        <p className="min-h-[2rem] text-xs py-2 text-black line-clamp-3">
          {excerpt}
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
      
        <div className="mb-1 flex justify-end ">
          <p
            onClick={handleRead}
            className="pr-4 text-xs font-medium flex items-center justify-end gap-1 text-brand-500 hover:text-brand-600 cursor-pointer">
            Read
            <ArrowRight className="w-4 h-4" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
