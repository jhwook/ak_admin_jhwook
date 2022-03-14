import { Routes, Route } from "react-router-dom";
import Generl from "./pages/Generl/indexs";
import Home from "./pages/Home/home";
import MemberShip_Status from "./pages/membrs/MemberShip_Status";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<MemberShip_Status />} />
      <Route path="/token_management" element={<Generl />} />
      <Route path="/asset_management" element={<Generl />} />
      <Route path="/nft_management" element={<Generl />} />
      <Route path="/settings" element={<Generl />} />
    </Routes>
  );
};

export default Routers;
