"use client";
import { genreList } from "./_genre-list";
import Hero from "./components/home/Hero";
import GenreCard from "./components/home/GenreCard";

export default function Home() {
  //overflow-hiddenは、要素の外側にはみ出した部分を非表示にする
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}
