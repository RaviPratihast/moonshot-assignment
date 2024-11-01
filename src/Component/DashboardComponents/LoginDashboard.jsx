// import React, { useState } from "react";
// // import { useAuth } from "../contexts/AuthContext";

// function LoginDashboard() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// //   const { login } = useAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(email, password);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-80">
//         <h2 className="text-xl font-bold mb-6">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block font-semibold mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-accent text-white w-full p-2 rounded font-semibold"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export { LoginDashboard };
