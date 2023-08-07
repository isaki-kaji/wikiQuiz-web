"use client";

import { useQuizStore } from "@/app/stores/quizStore";

const AnswerOrPassButton = () => {
  const { quizTextIndex } = useQuizStore();
  return (
    <button
      type="button"
      className="flex flex-row relative justify-center items-center py-3 px-6 outline-none bg-[#540375] h-[60px] hover:opacity-70"
      onClick={() => {}}
    >
      <span className="flex-1 text-white">
        {quizTextIndex === 0 ? "パス" : "答"}
      </span>
    </button>
  );
};

export default AnswerOrPassButton;
