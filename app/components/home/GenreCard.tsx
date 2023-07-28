"use client";

import { GenreProps } from "@/app/types";
import { useState } from "react";
import GenreDetails from "./GenreDetails";

//引数用の型を定義
type GenreCardProps = { genre: GenreProps };

const GenreCard = ({ genre }: GenreCardProps) => {
  const { title, Icon } = genre;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setIsOpen(true);
      }}
      className="flex flex-col p-6 justify-center items-center border hover:shadow-md rounded-3xl cursor-pointer"
    >
      <div className="flex flex-col gap-2 h-full justify-center items-center px-2 py-4 sm:px-6 sm:py-16 ">
        <div className="w-[120px] sm:w-[180px] md:w-[250px] flex justify-center">
          <h2 className="text:xl sm:text-4xl select-none">{title}</h2>
        </div>
        <div>
          <Icon color="#22A699" size={"80px"} />
        </div>
      </div>
      <GenreDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        genre={genre}
      />
    </div>
  );
};
export default GenreCard;
