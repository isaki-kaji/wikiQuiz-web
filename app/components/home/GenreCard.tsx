"use client";

import { GenreProps } from "@/app/types";
import { useState } from "react";
import GenreDetails from "./GenreDetails";
import { useQuizInfoStore } from "@/app/stores/store";

//引数用の型を定義
type GenreCardProps = { genre: GenreProps };

const GenreCard = ({ genre }: GenreCardProps) => {
  const { title, Icon } = genre;
  const [isOpen, setIsOpen] = useState(false);
  const { setGenre } = useQuizInfoStore();

  const decideGenre = (genre: string) => {
    setGenre(genre);
    setIsOpen(true);
  };
  return (
    <div
      onClick={() => {
        decideGenre(title);
      }}
      className="flex flex-col p-6 justify-center items-center border hover:shadow-md rounded-3xl cursor-pointer"
    >
      <div className="flex flex-col gap-2 h-full justify-center items-center px-2 py-4 sm:px-6 sm:py-16 ">
        <h2 className="text:xl sm:text-4xl select-none">{title}</h2>
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
