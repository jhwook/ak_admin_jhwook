import { Routes, Route } from "react-router-dom";
import AssetManagment from "./pages/AssetManegment/assetManagment";
import Generl from "./pages/Generl/indexs";
import Home from "./pages/Home/home";
import MemberShip_Status from "./pages/membrs/MemberShip_Status";
import { NftManagment } from "./pages/Nft_managment/Nft_managment";
import Settings from "./pages/Settings/settings";
import TokenMember from "./pages/TokenMember/TokenMember";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<MemberShip_Status/>} />
      <Route path="/token_management" element={<TokenMember />} />
      <Route path="/asset_management" element={<AssetManagment />} />
      <Route path="/nft_management" element={<NftManagment/>} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Routers;
