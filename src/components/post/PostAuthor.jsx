import {
  FaXTwitter,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa6";

const AuthorRow = ({ author, publishedDate }) => {
  const authorName = author?.name ?? "Unknown Author Name";
  const authorAvatar = author?.avatar ?? "/default-avatar.png";

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(document.title);

  const shareLinks = [
  {
    icon: FaXTwitter,
    url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
    bg: "bg-black hover:bg-gray-800 rounded-md",
  },
  {
    icon: FaWhatsapp,
    url: `https://wa.me/?text=${shareText}%20${shareUrl}`,
    bg: "bg-[#25D366] hover:bg-[#1DA851] rounded-full",
  },
  {
    icon: FaFacebookF,
    url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    bg: "bg-[#08306B] hover:bg-[#145DBF]",
  },
  {
    icon: FaLinkedinIn,
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    bg: "bg-[#0A66C2] hover:bg-[#084d92] rounded",
  },
];

  return (
    <div className="flex flex-col lg:flex-row lg:items-center sm:items-start justify-between gap-3 min-h-[2rem] my-5">
      <div className="gap-5 flex items-center">
        <img
          src={authorAvatar}
          alt={authorName}
          loading="lazy"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="">
          <p className="text-xl text-black font-semibold pb-1">{authorName}</p>
          <p className="text-sm text-black">{publishedDate}</p>
        </div>
      </div>

       <div className="flex items-center gap-2 mr-6">
        <span className="text-sm mr-4">Share this post</span>
        {shareLinks.map(({ icon: Icon, url, color, bg }, id) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition p-1  ${color}, ${bg}`}
      
          >
            <Icon className="w-4 h-4 text-white " />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AuthorRow;
