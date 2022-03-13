import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
// import About from "./About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default Routers;
