"use client";

import { db } from "@/app/firebase";
import { useQuizInfoStore } from "@/app/stores/quizInfoStore";
import { useQuizStore } from "@/app/stores/quizStore";
import { shuffleList } from "@/utils";
import { Combobox } from "@headlessui/react";
import { doc, getDoc, increment } from "firebase/firestore";
import { useState } from "react";

const AnswerBar = () => {
  const [query, setQuery] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { quizIndex, setQuizTexts, resetQuizTextIndex, incrementQuizIndex } =
    useQuizStore();
  const { titleList, category, shuffledTitleList } = useQuizInfoStore();
  const resultCategory =
    category === "プロ野球総合(現役)" ? category : category.replace(/\(.+/, "");

  const getQuizTexts = async () => {
    incrementQuizIndex();
    const docRef = doc(db, resultCategory, shuffledTitleList[quizIndex]);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setQuizTexts(shuffleList(docSnap.data().text));
      resetQuizTextIndex();
    }
  };

  const filteredAnswers = titleList
    .filter((title) => title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 3);

  return (
    <div className="absolute bottom-[6rem] sm:bottom-[12rem] left-1/2 transform -translate-x-1/2 z-10">
      <div className="flex items-end">
        <div className="relative">
          <h3 className="text-center">あなたの解答</h3>
          <Combobox value={selectedAnswer} onChange={setSelectedAnswer}>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="border-2 border-[#22A699] w-[250px] h-[60px] text-lg text-center"
            />
            <Combobox.Options className="absolute mt-1 w-full">
              {query === ""
                ? null
                : filteredAnswers.map((answer) => (
                    <Combobox.Option
                      key={answer}
                      value={answer}
                      className="cursor-pointer p-2 border-x border-b border-[#22A699] w-[250px] bg-white"
                    >
                      {answer}
                    </Combobox.Option>
                  ))}
            </Combobox.Options>
          </Combobox>
        </div>
        <div
          className="flex-center h-[60px] w-[100px] bg-[#540375] hover:opacity-70 cursor-pointer"
          onClick={() => getQuizTexts()}
        >
          <div className=" text-white">{query === "" ? "パス" : " 答"}</div>
        </div>
      </div>
    </div>
  );
};

export default AnswerBar;
