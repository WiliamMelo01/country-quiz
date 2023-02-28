import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { ScoreContext, scoreInterface } from "../context/score";
import {
  selectedOption,
  selectedOptionInterface,
} from "../context/selectedOption";
import { nextQuestion, userMadeAMistake } from "../redux/quizSlice";
import { store } from "../redux/store";

type QuizButtonProps = {
  className?: string;
  letter: string;
  option: string;
};

export default function QuizButton({
  className,
  letter,
  option,
}: QuizButtonProps) {
  const quizData = store.getState().quizSlice;

  const dispatch = useDispatch();

  const { selected, setSelected } = useContext(
    selectedOption
  ) as selectedOptionInterface;

  function handleclick() {
    if (option !== quizData.currentQuestion.answer) {
      dispatch(userMadeAMistake());
    }
    setSelected(option);
  }

  return (
    <button
      className={`w-full h-14 border-2 border-[#6066D0B2] text-[#6066D0CC] rounded-xl flex hover:bg-[#F9A826] hover:text-white transition hover:border-none ${className}`}
      style={{
        background:
          selected === option
            ? option === quizData.currentQuestion.answer
              ? "#60BF88"
              : "#EA8282"
            : selected &&
              option === quizData.currentQuestion.answer &&
              "#60BF88",
        color:
          selected === option && option === quizData.currentQuestion.answer
            ? "white"
            : selected === option && option !== quizData.currentQuestion.answer
            ? "white"
            : selected && option === quizData.currentQuestion.answer && "white",
      }}
      disabled={!!selected}
      onClick={handleclick}
    >
      <span className="w-[15%] h-full flex items-center justify-center text-2xl ">
        {letter.toUpperCase()}
      </span>
      <span className="w-[85%] h-full text-left flex items-center text-lg ">
        {option}
      </span>
    </button>
  );
}
