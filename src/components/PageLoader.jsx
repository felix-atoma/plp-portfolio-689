// src/components/PageLoader.jsx
const PageLoader = () => {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        <div className="relative w-28 h-28">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-full object-cover absolute top-4 left-4 z-10"
          />
          <div className="absolute inset-0 animate-spin border-4 border-orange-400 border-t-transparent rounded-full"></div>
        </div>
      </div>
    );
  };
  
  export default PageLoader;
  