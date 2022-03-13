import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<Home />} />
      <Route path="/token_management" element={<Home />} />
      <Route path="/asset_management" element={<Home />} />
      <Route path="/nft_management" element={<Home />} />
      <Route path="/settings" element={<Home />} />
    </Routes>
  );
};

export default Routers;
