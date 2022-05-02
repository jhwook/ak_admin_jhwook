import { Routes, Route, Navigate } from "react-router-dom";
import AdminSetting from "./pages/AdminSetting/AdminSetting";
import AprManagment from "./pages/AprManagment/AprManagment";
import AssetManagment from "./pages/AssetManegment/assetManagment";
import BeySell from "./pages/But/Sell/beySell";
import Home from "./pages/Home/home";
import Lend from "./pages/MemberDetails/Lend";
import Market from "./pages/MemberDetails/Market";
import MemberDetails from "./pages/MemberDetails/MemberDetails";
import Minting from "./pages/MemberDetails/Minting";
import MemberInformation from "./pages/membrs/memberInformation";
import MemberShip_Status from "./pages/membrs/MemberShip_Status";
import NftCurrent from "./pages/NftCrurrent/NftCurrent";
import { NftManagment } from "./pages/Nft_managment/Nft_managment";
import CreateApair from "./pages/PulllPraduct/CreateApair";
import PulllPraduct from "./pages/PulllPraduct/PulllPraduct";
import Pullmnagament from "./pages/PullManagment/pullmnagament";
import Settings from "./pages/Settings/settings";
import TokenMember from "./pages/TokenMember/TokenMember";
import Buy from "./pages/But/Buy";
import Sell from "./pages/But/Sell";
import Iteminformation from "./pages/NftCrurrent/Iteminformation";
import AkgApprove from "./pages/AkgApprove";
import Myprofile from "./pages/AdminSetting/Myprofile";
import PullmnagmentRegister from "./pages/PullManagment/PullManagmentRegister";
import Transactions from "./pages/transactions/transactions";
import { useEffect } from "react";

const Routers = () => {
  let accounts;
  let { klaytn } = window;
  klaytn.on("accountsChanged", function (acc) {
    accounts = acc;
    if (accounts && accounts.length > 0) {
      // alert(accounts);
      // display_button(true);
    } else {
      // display_button(false);
    }
  });

  const kaikas_connect = async () => {
    if (typeof window.klaytn !== "undefined") {
      const provider = window["klaytn"];
      // Kaikas user detected. You can now use the provider.
      try {
        const accounts = await klaytn.enable();
        console.log("provider", provider, "accounts", accounts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    kaikas_connect();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<MemberShip_Status />} />
      <Route path="/memberDetails" element={<MemberDetails />}>
        <Route index element={<Minting />} />
        <Route path="market" element={<Market />} />
        <Route path="lend" element={<Lend />} />
      </Route>
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/token_managment" element={<TokenMember />} />
      <Route path="/pull_managment" element={<Pullmnagament />} />
      <Route path="/apr_managment" element={<AprManagment />} />
      <Route path="/pull_praduct" element={<PulllPraduct />} />
      <Route path="/asset_management" element={<AssetManagment />} />

      <Route path="/buy" element={<BeySell />}>
        <Route index element={<Buy />} />
        <Route path="buy" element={<Buy />} />
        <Route path="sell" element={<Sell />} />
      </Route>

      <Route path="/nft_register" element={<NftManagment />} />
      <Route path="/nft_current" element={<NftCurrent />} />
      <Route path="/setting" element={<Settings />} />
      <Route path="/admin_setting" element={<AdminSetting />} />
      <Route index path="/memberInformation" element={<MemberInformation />} />
      <Route path="/market" element={<Market />} />
      <Route path="/lend" element={<Lend />} />
      <Route path="/createApair" element={<CreateApair />} />
      <Route path="/iteminformation" element={<Iteminformation />} />
      <Route path="/myProfile" element={<Myprofile />} />
      <Route path="/pullmnagmentRegister" element={<PullmnagmentRegister />} />
      <Route path="/akgApprove" element={<AkgApprove />} />
    </Routes>
  );
};

export default Routers;
