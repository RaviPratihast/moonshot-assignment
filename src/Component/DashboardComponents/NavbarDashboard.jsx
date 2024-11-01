// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

function NavbarDashboard() {
//   const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-accent text-white p-4 flex justify-between">
      <h1 className="text-xl">Data Dashboard</h1>
      {/* <div>
        {isAuthenticated ? (
          <button onClick={logout} className="ml-4">
            Logout
          </button>
        ) : (
          <Link to="/login" className="ml-4">
            Login
          </Link>
        )}
      </div> */}
    </nav>
  );
}

export { NavbarDashboard };
