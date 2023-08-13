"use client";

import { db } from "@/app/firebase";
import { useQuizInfoStore } from "@/app/stores/quizInfoStore";
import { GivenQuiz, useQuizResultStore } from "@/app/stores/quizResultStore";
import { useQuizStore } from "@/app/stores/quizStore";
import { shuffleList } from "@/utils";
import { Combobox } from "@headlessui/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const AnswerBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { quizIndex, setQuizTexts, resetQuizTextIndex, incrementQuizIndex } =
    useQuizStore();
  const { titleList, category, shuffledTitleList } = useQuizInfoStore();
  const { quizScore, incrementQuizScore, givenQuizTitles, setGivenQuizTitles } =
    useQuizResultStore();
  const resultCategory =
    category === "プロ野球総合(現役)" ? category : category.replace(/\(.+/, "");

  useEffect(() => {
    getQuizTexts();
  }, [quizIndex]);

  const getQuizTexts = async () => {
    const docRef = doc(db, resultCategory, shuffledTitleList[quizIndex]);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setQuizTexts(shuffleList(docSnap.data().text));
      const quiz: GivenQuiz = {
        quizTitle: shuffledTitleList[quizIndex],
        quizUrl: docSnap.data().url,
      };
      setGivenQuizTitles([...givenQuizTitles, quiz]);
      resetQuizTextIndex();
    }
  };

  const checkAnswer = () => {
    if (selectedAnswer === shuffledTitleList[quizIndex]) {
      incrementQuizScore();
      if (quizScore === 4) {
        router.push("/result");
      } else {
        setIsCorrect(true);
        setShowResult(true);
      }
    } else {
      setIsCorrect(false);
      setShowResult(true);
    }
    setTimeout(() => {
      setShowResult(false);
    }, 3000);
    incrementQuizIndex();
    setSelectedAnswer("");
    setQuery("");
  };

  const handleTimerComplete = () => {
    router.push("/result");
  };

  const filteredAnswers = titleList
    .filter((title) => title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3);

  return (
    <div className="absolute bottom-[6rem] sm:bottom-[12rem] left-1/2 transform -translate-x-1/2 z-10 flex flex-col ">
      {showResult ? (
        <h3 className="text-center text-[#540375]">
          {isCorrect ? (
            "正解です!!"
          ) : (
            <span>
              残念… 正解は
              <br className="block sm:hidden" />
              {`「${shuffledTitleList[quizIndex - 1]}」`}
            </span>
          )}
        </h3>
      ) : (
        <h3 className="text-center">あなたの解答</h3>
      )}
      <div className="flex items-end">
        <div className="mr-2">
          <CountdownCircleTimer
            isPlaying
            duration={180}
            colors="#22A699"
            size={50}
            strokeWidth={5}
            onComplete={handleTimerComplete}
          >
            {({ remainingTime }) => {
              return "";
            }}
          </CountdownCircleTimer>
        </div>
        <div className="relative">
          <Combobox value={selectedAnswer} onChange={setSelectedAnswer}>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="border-2 border-[#22A699] w-[180px] h-[40px] sm:w-[250px] sm:h-[60px] text-lg text-center"
            />
            <Combobox.Options className="absolute mt-1 w-full">
              {query === ""
                ? null
                : filteredAnswers.map((answer) => (
                    <Combobox.Option
                      key={answer}
                      value={answer}
                      className="cursor-pointer p-2 border-x border-b border-[#22A699] w-[180px] sm:w-[250px] bg-white"
                    >
                      {answer}
                    </Combobox.Option>
                  ))}
            </Combobox.Options>
          </Combobox>
        </div>
        <div
          className="flex-center h-[40px] sm:h-[60px] w-[100px] bg-[#540375] hover:opacity-70 cursor-pointer"
          onClick={() => checkAnswer()}
        >
          <div className=" text-white">{query === "" ? "パス" : " 答"}</div>
        </div>
      </div>
    </div>
  );
};

export default AnswerBar;
