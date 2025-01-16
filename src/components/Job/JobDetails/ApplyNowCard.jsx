function ApplyNowCard() {
  return (
    <>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-sky-500 mb-4">Apply Now</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Salary</h3>
          <p className="text-gray-300">{salary}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-gray-300">{contact}</p>
        </div>
        <a
          href="#"
          className="inline-block bg-sky-500 text-gray-900 border-2 border-sky-500 hover:bg-gray-700 hover:text-white hover:border-gray-700 py-2 px-4 rounded-full transition duration-200"
        >
          Apply Now
        </a>
      </div>
    </>
  );
}
export default ApplyNowCard;
