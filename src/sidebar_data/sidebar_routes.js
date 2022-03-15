import { ReactComponent as Ilban } from "../assets/icons/ilban.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Ak } from "../assets/icons/AK.svg";
import { ReactComponent as Bank } from "../assets/icons/Bank.svg";
import { ReactComponent as Nft } from "../assets/icons/Nft.svg";
import { ReactComponent as Setting } from "../assets/icons/setting.svg";
import { ReactComponent as Section } from "../assets/icons/section.svg";
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
    icon: Ilban,
    arrow: Section,
    hidden: false,
    Child: [
      { title: "사이", params: "sitemene2" },
      { title: "사이트", params: "sitemene1" },
      { title: "사이트", params: "sitemen 3 " },
    ],
  },

  {
    id: 2,
    title: "회원관리",
    path: "/members",
    element: <MemberShip_Status />,
    Icon: User,
    hidden: false,
    Child: [
      { title: "사이트", params: "sitemene2" },
      { title: "사이트", params: "sitemene1" },
      { title: "사이트", params: "sitemen 3 " },
    ],
  },
  {
    id: 3,
    title: "토근관리",
    path: "/token_management",
    element: <TokenMember />,
    Icon: Ak,
    hidden: false,
    Child: [
      { title: "사이트", params: "sitemene2" },
      { title: "사이트", params: "sitemene1" },
      { title: "사이트", params: "sitemen 3 " },
    ],
  },
  {
    id: 4,
    title: "자산관리",
    path: "/asset_management",
    element: <AssetManagment />,
    Icon: Bank,
    hidden: false,
    Child: [
      { title: "사이트", params: "sitemene2" },
      { title: "사이트", params: "sitemene1" },
      { title: "사이트", params: "sitemen 3 " },
    ],
  },
  {
    id: 5,
    title: "NFT 관리",
    path: "/nft_management",
    element: <NftManagment />,
    Icon: Nft,
    hidden: false,
    Child: [
      { title: "사이트", params: "sitemene2" },
      { title: "사이트", params: "sitemene1" },
      { title: "사이트", params: "sitemen 3 " },
    ],
  },
  {
    id: 6,
    title: "성정",
    path: "/settings",
    element: <Settings />,
    Icon: Setting,
    hidden: false,
    Child: [
      { title: "사이트", params: "sitemene2" },
      { title: "사이트", params: "sitemene1" },
      { title: "사이트", params: "sitemen 3 " },
    ],
  },
];
