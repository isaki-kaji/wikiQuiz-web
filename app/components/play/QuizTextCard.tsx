"use client";

import { useQuizInfoStore, useQuizStore } from "@/app/stores/store";
import { useEffect } from "react";

const quizTextCard = () => {
  const { shuffledTitleList } = useQuizInfoStore();
  const {
    quizTexts,
    setQuizTexts,
    quizIndex,
    incrementQuizIndex,
    quizTextIndex,
    incrementQuizTextIndex,
    quizScore,
    incrementQuizScore,
  } = useQuizStore();

  useEffect(() => {}, [quizTextIndex]);
  useEffect(() => {}, [quizIndex]);

  return (
    <div className="w-[95%] sm:w-[80%] md:w-[65%] lg:w-[50%] bg-white h-[60%] shadow-md mt-4 md:mt-8">
      <p className="p-6"></p>
    </div>
  );
};

export default quizTextCard;
