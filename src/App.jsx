import "./app.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
