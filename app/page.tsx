"use client";

import Hero from "./components/home/Hero";
import GenreCard from "./components/home/GenreCard";
import { genreList } from "@/constants";

export default function Home() {
  //overflow-hiddenは、要素の外側にはみ出した部分を非表示にする
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="select">
        <h1 className="text-center md:text-2xl lg:text-4xl select-none">
          ジャンル一覧
        </h1>
        <section>
          <div className="cards__wrapper">
            {genreList.map((genre) => (
              <div key={genre.title}>
                <GenreCard genre={genre} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
