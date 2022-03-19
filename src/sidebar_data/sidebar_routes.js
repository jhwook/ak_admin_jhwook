import ilban_setting_icon from "../assets/icons/Ilban.svg";
import user_setting_icon from "../assets/icons/User.svg";
import ak_setting_icon from "../assets/icons/AK.svg";
import bank_setting_icon from "../assets/icons/Bank.svg";
import nft_setting_icon from "../assets/icons/Nft.svg";
import setting_icon from "../assets/icons/setting.svg";
import section_setting_icon from "../assets/icons/section.svg";
import Generl from "../pages/Generl/indexs";
import MemberShip_Status from "../pages/membrs/MemberShip_Status";
import TokenMember from "../pages/TokenMember/TokenMember";
import AssetManagment from "../pages/AssetManegment/assetManagment";
import NftManagment from "../pages/Nft_managment/Nft_managment";
import Settings from "../pages/Settings/settings";

export const sidebar = [
  {
    id: 1,
    title: "일반",
    element: <Generl />,
    path: "/",
    icon: ilban_setting_icon,
    // arrow: section_setting_icon,
    hidden: false,
    Child: [{ title: "대시보드", params: "" }],
  },

  {
    id: 2,
    title: "회원관리",
    path: "/members",
    element: <MemberShip_Status />,
    icon: user_setting_icon,
    hidden: false,
    Child: [
      { title: "회원형황", params: "members" },
      { title: "회원상세", params: "memberDetails" },
    ],
  },
  {
    id: 3,
    title: "토근관리",
    path: "/token_managment",
    element: <TokenMember />,
    icon: ak_setting_icon,
    hidden: false,
    Child: [
      { title: "토근괸리", params: "token_managment" },
      { title: "풀 관리", params: "pull_managment" },
      { title: "APR 관리", params: "apr_managment " },
      { title: "풀 생성", params: "pull_praduct " },
    ],
  },
  {
    id: 4,
    title: "자산관리",
    path: "/asset_management",
    element: <AssetManagment />,
    icon: bank_setting_icon,
    hidden: false,
    Child: [
      { title: "스왑 관리", params: "asset_management" },
      { title: "Buy/Sell", params: "buy/sell" },
    ],
  },
  {
    id: 5,
    title: "NFT 관리",
    path: "/nft_register",
    element: <NftManagment />,
    icon: nft_setting_icon,
    hidden: false,
    Child: [
      { title: "NFT 등록", params: "nft_register" },
      { title: "NFT 현황", params: "nft_current" },
    ],
  },
  {
    id: 6,
    title: "성정",
    path: "/setting",
    element: <Settings />,
    icon: setting_icon,
    hidden: false,
    Child: [
      { title: "운영 설정", params: "setting" },
      { title: "관리자 설정", params: "admin_setting" },
    ],
  },
];
