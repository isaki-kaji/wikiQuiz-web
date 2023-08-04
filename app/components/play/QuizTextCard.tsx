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
  } = useQuizStore();

  useEffect(() => {}, [quizTextIndex]);
  useEffect(() => {}, [quizIndex]);

  return (
    <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[80%] xl:w-[50%] bg-white h-[60%] shadow-2xl rounded-lg">
      <div className="text-center">
        <p className="p-6"></p>
      </div>
    </div>
  );
};

export default quizTextCard;
