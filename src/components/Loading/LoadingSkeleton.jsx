function LoadingSkeleton() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse"
          >
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
            <div className="h-10 bg-gray-700 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkeleton;
