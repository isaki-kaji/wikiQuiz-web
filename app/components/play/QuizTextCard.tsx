"use client";

import { db } from "@/app/firebase";
import { useQuizInfoStore } from "@/app/stores/quizInfoStore";
import { useQuizStore } from "@/app/stores/quizStore";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import CustomButton from "../common/CustomButton";

const QuizTextCard = () => {
  const { shuffledTitleList, category } = useQuizInfoStore();
  const {
    quizTexts,
    setQuizTexts,
    quizIndex,
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
    <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[70%] lg:w-[800px] bg-white h-[60%] shadow-2xl rounded-lg ">
      <div className="relative h-full overflow-auto">
        <p className="p-6 sm:p-10 lg:px-16 lg:py-20 text-base sm:text-lg md:text-xl">
          {quizTexts[quizTextIndex]}
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <CustomButton
          title={"→"}
          containerStyles="rounded-full text-white bg-[#22A669] hover:opacity-70 z-20"
          handleClick={() => {
            incrementQuizTextIndex();
          }}
        />
      </div>
    </div>
  );
};

export default QuizTextCard;
