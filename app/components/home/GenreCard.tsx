"use client";

import { GenreCard } from "@/app/types";

//引数用の型を定義
type GenreCardProps = { genre: GenreCard };

const GenreCard = ({ genre }: GenreCardProps) => {
  const { title, Icon } = genre;
  return (
    <div
      className="flex flex-col p-6 justify-center items-center text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl"
      onClick={() => {}}
    >
      <div className="flex flex-col gap-2 h-full justify-center items-center px-2 py-4 sm:px-6 sm:py-16">
        <div className="w-[120px] sm:w-[180px] md:w-[250px] flex justify-center">
          <h2 className="text:xl sm:text-4xl select-none">{title}</h2>
        </div>
        <div>
          <Icon color="#22A699" size={"80px"} />
        </div>
      </div>
    </div>
  );
};
export default GenreCard;
