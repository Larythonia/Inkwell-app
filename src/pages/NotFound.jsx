

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-white">
      <div className="w-70  ">
        <h1 className="text-brandr-300 text-4xl font-bold text-center mt-20">404</h1>
        <p className="text-center text-2xl font-bold mt-4">Page not found</p>
        <p className="text-center text-md font-medium mt-1">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
