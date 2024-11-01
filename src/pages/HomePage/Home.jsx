import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Moonshot Assignment
        </h1>
        {/* <p className="text-gray-600 mb-8">Select the assignment</p> */}
        <div className="flex flex-col gap-4">
          <Link to="/email">
            <button className="w-full py-3 px-4 bg-accent text-white font-semibold rounded-lg shadow-md border hover:border-accent hover:text-text hover:bg-white transition duration-300 ease-in-out">
              Moonshot Email Assignment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Home };
