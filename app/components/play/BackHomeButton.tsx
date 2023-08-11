"use client";

import { useQuizInfoStore } from "@/app/stores/quizInfoStore";
import { useQuizResultStore } from "@/app/stores/quizResultStore";
import { useQuizStore } from "@/app/stores/quizStore";
import Link from "next/link";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const BackHomeButton = () => {
  const { resetQuiz } = useQuizStore();
  const { resetQuizResult } = useQuizResultStore();
  const { resetQuizInfo } = useQuizInfoStore();

  const resetState = () => {
    resetQuiz();
    resetQuizResult();
    resetQuizInfo();
  };
  return (
    <Link href="/">
      <AiOutlineCloseCircle
        color="#22A699"
        className="text-4xl sm:text-6xl cursor-pointer absolute top-1 left-2 sm:top-4 sm:left-4"
        onClick={resetState}
      />
    </Link>
  );
};

export default BackHomeButton;
