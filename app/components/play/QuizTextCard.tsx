"use client";

import { db } from "@/app/firebase";
import { useQuizInfoStore } from "@/app/stores/quizInfoStore";
import { useQuizStore } from "@/app/stores/quizStore";
import { doc, getDoc } from "firebase/firestore";
import { Fragment, useEffect, useRef, useState } from "react";

import CustomButton from "../common/CustomButton";
import { shuffleList } from "@/utils";
import { Transition } from "@headlessui/react";

const QuizTextCard = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const { shuffledTitleList, category } = useQuizInfoStore();
  const {
    quizTexts,
    setQuizTexts,
    quizIndex,
    quizTextIndex,
    incrementQuizTextIndex,
  } = useQuizStore();

  const mounted = useRef(false);

  useEffect(() => {
    const resultCategory =
      category === "プロ野球総合(現役)"
        ? category
        : category.replace(/\(.+/, "");
    (async () => {
      // 即時関数として非同期関数を実行
      const docRef = doc(db, resultCategory, shuffledTitleList[quizIndex]);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setQuizTexts(shuffleList(docSnap.data().text));
      }
    })();
  }, []);

  useEffect(() => {
    if (mounted.current) {
      setIsShowing(false);
      setIsTextVisible(false); // テキストを非表示に
      setTimeout(() => {
        setIsShowing(true);
        // アニメーションの終了を待ってからテキストを表示
        setTimeout(() => setIsTextVisible(true), 200);
      }, 500);
    } else {
      mounted.current = true;
    }
  }, [quizIndex]);

  const showNextText = () => {
    if (quizTextIndex < 9) {
      incrementQuizTextIndex();
    }
  };

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[70%] lg:w-[800px] bg-white h-[60%] shadow-2xl rounded-lg ">
        <div className="relative h-full overflow-auto">
          <p className="px-6 pt-6 pb-20 sm:p-10 lg:px-16 lg:py-20 text-base sm:text-lg md:text-xl">
            {isTextVisible ? quizTexts[quizTextIndex] : ""}
          </p>
        </div>
        <div className="absolute bottom-4 right-4 flex-center flex-col">
          <p
            className={`text-sm ${
              quizTextIndex === 9 ? "text-gray-300" : "text-[#22A669]"
            }`}
          >{`${(quizTextIndex + 1).toString()}/10`}</p>
          <CustomButton
            title={"→"}
            containerStyles={`rounded-full text-white  hover:opacity-70 z-20 ${
              quizTextIndex === 9
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#22A669]"
            }`}
            handleClick={() => {
              showNextText();
            }}
          />
        </div>
      </div>
    </Transition>
  );
};

export default QuizTextCard;
