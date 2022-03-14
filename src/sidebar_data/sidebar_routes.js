import {ReactComponent as Ilban}  from "../assets/icons/ilban.svg";
import {ReactComponent as User}  from "../assets/icons/user.svg";
import {ReactComponent as Ak}   from "../assets/icons/AK.svg";
import {ReactComponent as Bank}  from "../assets/icons/Bank.svg";
import {ReactComponent as Nft}  from "../assets/icons/Nft.svg";
import {ReactComponent as Setting} from "../assets/icons/setting.svg";
import {ReactComponent as Section}  from "../assets/icons/section.svg";
import Generl from "../pages/Generl/indexs";
import MemberShip_Status from "../pages/membrs/MemberShip_Status";

export const sidebar = [
  {
    id: 1,
    title: "일반",
    element:<Generl/>,
    path: "/",
    Icon: Ilban,
    Img: Section,
    hidden: false,
  },
  {
    id: 2,
    title: "회원관리",
    path: "/members",
    element:<MemberShip_Status/>,
    Icon: User,
    hidden: false,
  },
  {
    id: 3,
    title: "토근관리",
    path: "/token_management",
    Icon: Ak,
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
    Icon: Setting,
    hidden: false,
  },
];
