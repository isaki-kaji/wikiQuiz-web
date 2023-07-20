"use client";
import { genreList } from "./_genre-list";
import GenreCard from "./components/home/GenreCard";

export default function Home() {
  return (
    <div className="pt-[61px] sm:pt-[73px] h-full px-4">
      <div className="py-4 sm:py-6 flex flex-wrap gap-5 justify-center items-center">
        {genreList.map((genre) => {
          return (
            <div key={genre.title}>
              <GenreCard title={genre.title} Icon={genre.Icon}></GenreCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
