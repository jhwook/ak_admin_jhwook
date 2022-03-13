import ilban from "../assets/icons/ilban.svg";
import user from "../assets/icons/user.svg";
import AK from "../assets/icons/AK.svg";
import Bank from "../assets/icons/Bank.svg";
import Nft from "../assets/icons/Nft.svg";
import setting from "../assets/icons/setting.svg";
import section from "../assets/icons/section.svg";

export const sidebar = [
  {
    id: 1,
    title: "일반",
    path: "/main",
    Icon: ilban,
    Img: section,
    hidden: false,
  },
  {
    id: 2,
    title: "회원관리",
    path: "/members",
    Icon: user,
    hidden: false,
  },
  {
    id: 3,
    title: "토근관리",
    path: "/token_management",
    Icon: AK,
    hidden: false,
  },
  {
    id: 4,
    title: "자산관리",
    path: "/asset_management",
    Icon: Bank,
    hidden: false,
  },
  {
    id: 5,
    title: "NFT 관리",
    path: "/nft_management",
    Icon: Nft,
    hidden: false,
  },
  {
    id: 6,
    title: "성정",
    path: "/settings",
    Icon: setting,
    hidden: false,
  },
];
