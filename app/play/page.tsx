"use client";

import React from "react";
import { useQuizInfoStore } from "../stores/store";
import { title } from "process";

const PlayPage = () => {
  const { shuffledTitleList } = useQuizInfoStore();
  return (
    <ul>
      {shuffledTitleList.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
};

export default PlayPage;
