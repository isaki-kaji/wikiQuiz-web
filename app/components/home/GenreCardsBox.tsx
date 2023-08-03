"use client";

import { genreList } from "@/constants";
import React from "react";
import GenreCard from "./GenreCard";
import Hero from "./Hero";

const GenreCardsBox = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="select">
      <h1 className="text-center md:text-2xl lg:text-4xl select-none">
        ジャンル一覧
      </h1>
      <section>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 md:pt-14 pt-6">
          {genreList.map((genre) => (
            <div key={genre.title}>
              <GenreCard genre={genre} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GenreCardsBox;
