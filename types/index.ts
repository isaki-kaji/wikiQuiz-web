import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  hasAnime?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export type GenreProps = {
  title: string;
  Icon: IconType;
  categoryList: string[];
};
