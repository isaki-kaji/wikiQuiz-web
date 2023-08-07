import React from "react";
import AnswerBar from "./AnswerBar";
import CustomButton from "../common/CustomButton";
import AnswerOrPassButton from "./AnswerOrPassButton";

const InputInterface = () => {
  return (
    <div className="absolute bottom-[8rem] sm:bottom-[10rem] left-1/2 transform -translate-x-1/2 z-10">
      <AnswerBar />
    </div>
  );
};

export default InputInterface;
