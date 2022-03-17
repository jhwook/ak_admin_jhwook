import { Routes, Route } from "react-router-dom";
import AdminSetting from "./pages/AdminSetting/AdminSetting";
import AprManagment from "./pages/AprManagment/AprManagment";
import AssetManagment from "./pages/AssetManegment/assetManagment";
import BeySell from "./pages/But/Sell/beySell";
import Home from "./pages/Home/home";
import Lend from "./pages/MemberDetails/Lend";
import Market from "./pages/MemberDetails/Market";
import MemberDetails from "./pages/MemberDetails/MemberDetails";
import MemberInformation from "./pages/membrs/memberInformation";
import MemberShip_Status from "./pages/membrs/MemberShip_Status";
import NftCurrent from "./pages/NftCrurrent/NftCurrent";
import { NftManagment } from "./pages/Nft_managment/Nft_managment";
import PulllPraduct from "./pages/PulllPraduct/PulllPraduct";
import Pullmnagament from "./pages/PullManagment/pullmnagament";
import Settings from "./pages/Settings/settings";
import TokenMember from "./pages/TokenMember/TokenMember";

const Routers = () => {
  return (
    <Routes>  
      <Route path="/"  element={<Home />} />
      <Route path="/members" element={<MemberShip_Status />} />
      <Route path="/memberDetails" element={<MemberDetails />} />
      <Route path="/token_managment" element={<TokenMember />} />
      <Route path="/pull_managment" element={<Pullmnagament />} />
      <Route path="/apr_managment" element={<AprManagment />} />
      <Route path="/pull_praduct" element={<PulllPraduct />} />
      <Route path="/asset_management" element={<AssetManagment />} />
      <Route path="/buy/sell" element={<BeySell />} />
      <Route path="/nft_register" element={<NftManagment />} />
      <Route path="/nft_current" element={<NftCurrent />} />
      <Route path="/setting" element={<Settings />} />
      <Route path="/admin_setting" element={<AdminSetting />} />
    
      <Route index path='/memberInformation' element={<MemberInformation/>} />
      <Route path='/market' element={<Market/>}/>
      <Route path='/lend' element={<Lend/>}  />
    </Routes>

  );
};

export default Routers;

