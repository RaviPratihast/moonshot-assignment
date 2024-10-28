import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Choose Your Assignment
        </h1>
        <p className="text-gray-600 mb-8">Select the assignment</p>
        <div className="flex flex-col gap-4">
          <Link to="/email-assignment">
            <button className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Email Assignment
            </button>
          </Link>

          <Link to="/dashboard-assignment">
            <button className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out">
              Dashboard Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Home };
