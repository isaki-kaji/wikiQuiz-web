"use client";

import Hero from "./components/home/Hero";
import GenreCard from "./components/home/GenreCard";
import { genreList } from "@/constants";

export default function Home() {
  //overflow-hiddenは、要素の外側にはみ出した部分を非表示にする
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <h1 className="text-center md:text-2xl lg:text-4xl" id="select">
          ジャンル一覧
        </h1>
        {genreList.map((genre) => (
          <GenreCard genre={genre} />
        ))}
      </div>
    </main>
  );
}
