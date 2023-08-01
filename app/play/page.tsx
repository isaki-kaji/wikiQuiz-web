"use client";

import React from "react";
import { useQuizInfoStore } from "../stores/store";

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
