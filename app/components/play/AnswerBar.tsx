"use client";

import { useQuizInfoStore } from "@/app/stores/store";
import { Combobox } from "@headlessui/react";
import React, { useState } from "react";

const AnswerBar = () => {
  const [query, setQuery] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { titleList } = useQuizInfoStore();

  const filteredAnswers = titleList.filter((title) => {
    return title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 md:bottom-40  border-2 border-[#22A699]">
      <Combobox value={selectedAnswer} onChange={setSelectedAnswer}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
        <Combobox.Options>
          {query === ""
            ? null
            : filteredAnswers.map((answer) => (
                <Combobox.Option
                  key={answer}
                  value={answer}
                  className="cursor-pointer"
                >
                  {answer}
                </Combobox.Option>
              ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default AnswerBar;
