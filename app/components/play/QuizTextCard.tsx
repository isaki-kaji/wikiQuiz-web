"use client";

import { db } from "@/app/firebase";
import { useQuizInfoStore } from "@/app/stores/quizInfoStore";
import { useQuizStore } from "@/app/stores/quizStore";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

const quizTextCard = () => {
  const { shuffledTitleList, category } = useQuizInfoStore();
  const {
    quizTexts,
    setQuizTexts,
    quizIndex,
    incrementQuizIndex,
    quizTextIndex,
    incrementQuizTextIndex,
  } = useQuizStore();

  useEffect(() => {
    (async () => {
      // 即時関数として非同期関数を実行
      console.log("quizTextCard.tsxのuseEffectが呼ばれました");
      const docRef = doc(db, category, shuffledTitleList[quizIndex]);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setQuizTexts(docSnap.data().text);
      }
    })();
  }, [quizTextIndex]);

  return (
    <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[70%] lg:w-[800px] bg-white h-[60%] shadow-2xl rounded-lg">
      <p className="p-6 sm:p-10 lg:px-16 lg:py-20 text-base sm:text-lg md:text-xl">
        {quizTexts[quizTextIndex]}
      </p>
    </div>
  );
};

export default quizTextCard;
