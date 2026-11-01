// src/components/PageLoader.jsx
import Monogram from "./Monogram";

const PageLoader = () => {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        <div className="relative w-28 h-28">
          <Monogram className="absolute left-6 top-6 z-10 h-16 w-16 text-xl" />
          <div className="absolute inset-0 animate-spin border-4 border-brand border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  };

  export default PageLoader;
