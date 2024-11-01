import { Routes, Route } from "react-router-dom";
import { Home, Email } from "./pages/index-page";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
};

export default App;
