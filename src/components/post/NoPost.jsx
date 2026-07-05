import { X } from "lucide-react";
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";

const NoPost = () => {
  const navigate = useNavigate();

   const handleRead = () => {
  navigate("/bloglisting");
  };
  return (
    <main>
       <button
        onClick={handleRead}
        className="flex items-center gap-2 text-brand-500 hover:text-brand-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to post
      </button>
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-white">
      <div className="bg-brandr-200 border border-brandr-300 rounded-lg px-25 py-15">
        <div className="w-80 bg-brandr-200">
          <div className="relative w-30 h-20 mb-10 ml-7">
            <X
              className="absolute inset-0  text-black w-60 h-30"
              strokeWidth={3}
            />
            <X
              className="absolute inset-0 text-brandr-300 w-60 h-30"
              strokeWidth={2.5}
            />
          </div>
          <div>
            <h3 className="text-center text-black text-2xl font-bold mt-4">
              Could not load this post
            </h3>
            <p className="text-center text-md  mt-1">
              This post may have been removed or temporarily unavailable
            </p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default NoPost;
