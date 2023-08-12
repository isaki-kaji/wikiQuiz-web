"use client";

import { useQuizResultStore } from "@/app/stores/quizResultStore";
import React from "react";

const ScoreText = () => {
  const { quizScore } = useQuizResultStore();
  return (
    <p className="text-2xl sm:text-4xl xl:text-6xl cursor-pointer absolute top-1 right-2 sm:top-4 sm:right-4 text-[#22A699]">
      <span>{quizScore}</span>
      /5
    </p>
  );
};

export default ScoreText;
