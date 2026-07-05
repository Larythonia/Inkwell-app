import { BookOpen  } from "lucide-react";

const NoBlog = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-white">
      <div className="w-70 ">
        <BookOpen  className="w-60 h-50 text-center"/>
        <h3 className="text-center text-black text-3xl font-bold ">No posts yet</h3>
        <p className="text-center text-lg  mt-1">
          There are no posts available right now. Check back soon.
        </p>
      </div>
    </div>
  );
};

export default NoBlog;
