const ColorScheme = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-sky-500 text-center mb-8">
        Color Scheme
      </h1>

      {/* Section to display various background and text color combinations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dark Gray Background Section */}
        <div className="space-y-4 bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Dark Gray Background
          </h2>
          <p className="text-sky-500">
            This section uses `text-sky-500` for the heading.
          </p>
          <p className="text-gray-300">
            This section uses `bg-gray-900` for the background and
            `text-gray-200` for the text.
          </p>
        </div>

        {/* Sky Blue Background Section */}
        <div className="bg-sky-500 text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Sky Blue Background
          </h2>
          <p className="text-white">
            This section uses `bg-sky-500` for the background and `text-white`
            for the text.
          </p>
        </div>

        {/* Gray Background with Dark Text */}
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Gray Background
          </h2>
          <p className="text-gray-300">
            This section uses `bg-gray-800` for the background and
            `text-gray-300` for the text.
          </p>
        </div>

        {/* Light Gray Text */}
        <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Light Gray Text
          </h2>
          <p className="text-gray-200">
            This section uses `text-gray-200` for the text on a dark background
            (`bg-gray-900`).
          </p>
        </div>

        {/* Hover Effect */}
        <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg hover:bg-gray-700 hover:text-white transition duration-200">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Hover Effect</h2>
          <p className="text-gray-300">
            Hovering over this section will change its background to
            `bg-gray-700` and text to `text-white`.
          </p>
        </div>

        {/* Button with Sky Blue Background */}
        <div className="flex flex-col justify-center items-center bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Button with Sky Blue Background
          </h2>
          <button className="bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-full transition duration-200 font-medium">
            Go to Homepage
          </button>
        </div>

        {/* Input field with gray background */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Input Field with Gray Background
          </h2>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 p-3 rounded bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Link with Sky Blue Background and Button */}
        <div className="flex flex-col justify-center items-center bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Link with Sky Blue Background
          </h2>
          <a
            href="/login"
            className="w-full text-center bg-sky-500 text-gray-900 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-full transition duration-200 font-medium"
          >
            Login
          </a>
        </div>

        {/* GitHub Button with Border */}
        <div className="flex flex-col justify-center items-center bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">
            Button with Border and Icon
          </h2>
          <button
            className="flex items-center justify-between gap-2 bg-gray-700 border border-sky-500 hover:border-sky-700 text-gray-300 hover:bg-gray-600 py-2 px-4 rounded-lg transition duration-200 w-full max-w-xs"
            type="button"
          >
            <span className="text-sm text-gray-400">Icon</span>
            <div className="flex-grow h-[1px] bg-gray-600"></div>
            <span className="text-sm text-gray-400">Text</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorScheme;
