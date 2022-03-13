// import {ReactComponent as ilban} from '../assets/icons/ilban.svg'
// import {ReactComponent as user} from '../assets/icons/user.svg'
// import {ReactComponent as AK} from '../assets/icons/AK.svg'
// import {ReactComponent as Bank} from '../assets/icons/Bank.svg'
// import {ReactComponent as Nft} from '../assets/icons/Nft.svg'
// import {ReactComponent as setting} from '../assets/icons/setting.svg'
// import {ReactComponent as section } from '../assets/icons/section.svg'

import ilban from "../assets/icons/ilban.svg";
import user from "../assets/icons/user.svg";
import AK from "../assets/icons/AK.svg";
import Bank from "../assets/icons/Bank.svg";
import Nft from "../assets/icons/Nft.svg";
import setting from "../assets/icons/setting.svg";
import section from "../assets/icons/section.svg";
import Generic from "../pages/Generec";

export const sidebar = [
  {
    id: 1,
    title: "일반",
    path: "/일반",
    Icon: ilban,
    Img: section,
    Component: Generic,
    hidden: false,
  },
  {
    id: 2,
    title: "회원관리",
    path: "/회원관리",
    Icon: user,
    Component: Generic,
    hidden: false,
  },
  {
    id: 3,
    title: "토근관리",
    path: "/토근관리",
    Icon: AK,
    Component: Generic,
    hidden: false,
  },
  {
    id: 4,
    title: "자산관리",
    path: "/자산관리",
    Icon: Bank,
    Component: Generic,
    hidden: false,
  },
  {
    id: 5,
    title: "NFT 관리",
    path: "/NFT관리",
    Icon: Nft,
    Component: Generic,
    hidden: false,
  },
  {
    id: 6,
    title: "성정",
    path: "/성정",
    Icon: setting,
    Component: Generic,
    hidden: false,
  },
];
