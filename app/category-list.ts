import { IconType } from "react-icons";
import { CiBaseball } from "react-icons/ci";
import { PiSoccerBallFill } from "react-icons/pi";
import { BsBalloonHeart, BsBalloonHeartFill } from "react-icons/bs";
import { RiUserVoiceLine, RiUserVoiceFill } from "react-icons/ri";
import { GiSamuraiHelmet } from "react-icons/gi";

export type CategoryCardProps = {
  title: string;
  Icon: IconType;
};

export const categoryList: Array<CategoryCardProps> = [
  { title: "プロ野球", Icon: CiBaseball },
  { title: "サッカー", Icon: PiSoccerBallFill },
  { title: "女性アイドル", Icon: BsBalloonHeart },
  { title: "男性アイドル", Icon: BsBalloonHeartFill },
  { title: "女性声優", Icon: RiUserVoiceLine },
  { title: "男性声優", Icon: RiUserVoiceFill },
  { title: "歴史", Icon: GiSamuraiHelmet },
];
