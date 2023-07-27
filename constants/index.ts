import { CiBaseball } from "react-icons/ci";
import { PiSoccerBallFill } from "react-icons/pi";
import { BsBalloonHeart, BsBalloonHeartFill } from "react-icons/bs";
import { RiUserVoiceLine, RiUserVoiceFill } from "react-icons/ri";
import { GiSamuraiHelmet } from "react-icons/gi";
import { GenreProps } from "@/app/types";

export const genreList: Array<GenreProps> = [
  {
    title: "プロ野球",
    Icon: CiBaseball,
    categoryList: [
      "プロ野球総合(現役)",
      "中日ドラゴンズ",
      "中日ドラゴンズ(現役)",
      "読売ジャイアンツ",
      "読売ジャイアンツ(現役)",
      "阪神タイガース",
      "阪神タイガース(現役)",
      "広島東洋カープ",
      "広島東洋カープ(現役)",
      "横浜DeNAベイスターズ",
      "横浜DeNAベイスターズ(現役)",
      "東京ヤクルトスワローズ",
      "東京ヤクルトスワローズ(現役)",
      "福岡ソフトバンクホークス",
      "福岡ソフトバンクホークス(現役)",
      "千葉ロッテマリーンズ",
      "千葉ロッテマリーンズ(現役)",
      "埼玉西武ライオンズ",
      "埼玉西武ライオンズ(現役)",
      "北海道日本ハムファイターズ",
      "北海道日本ハムファイターズ(現役)",
      "オリックス・バファローズ",
      "オリックス・バファローズ(現役)",
      "東北楽天ゴールデンイーグルス",
      "東北楽天ゴールデンイーグルス(現役)",
    ],
  },
  { title: "サッカー", Icon: PiSoccerBallFill, categoryList: [] },
  { title: "女性アイドル", Icon: BsBalloonHeart, categoryList: [] },
  { title: "男性アイドル", Icon: BsBalloonHeartFill, categoryList: [] },
  { title: "女性声優", Icon: RiUserVoiceLine, categoryList: [] },
  { title: "男性声優", Icon: RiUserVoiceFill, categoryList: [] },
  { title: "歴史", Icon: GiSamuraiHelmet, categoryList: [] },
];
