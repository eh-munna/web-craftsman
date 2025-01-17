function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-96">
      <div
        className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"
        role="status"
      ></div>
    </div>
  );
}

export default LoadingSpinner;
