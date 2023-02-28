import React, { ReactNode, useContext, useEffect } from "react";
import QuizButton from "../components/QuizButton";

import UndrawAdventureImage from "../assets/undraw_adventure_4hum 1.svg";
import { store } from "../redux/store";
import Question from "../components/Question";
import { ScoreContext, scoreInterface } from "../context/score";
import {
  selectedOption,
  selectedOptionInterface,
} from "../context/selectedOption";
import NextButton from "../components/NextButton";

export default function Home() {
  const { selected } = useContext(selectedOption) as selectedOptionInterface;

  const quizData = store.getState().quizSlice;
  const options = quizData.currentQuestion.options;

  function getLetterByIndexNumber(index: number): string {
    const result = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
    };

    return result[index as keyof typeof result];
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-quiz bg-center font-poppins font-medium">
      <h1 className="w-[464px] text-left text-3xl text-white uppercase mb-4 font-bold">
        Country Quiz
      </h1>
      <div className="w-[464px] min-h-[515px] bg-white rounded-3xl py-16 px-8 flex flex-col relative">
        <img
          src={UndrawAdventureImage}
          alt="Undraw adventure image"
          className="absolute -top-20 right-0"
        />
        <Question question={quizData.currentQuestion.question} />
        <div className="flex flex-1 flex-col justify-center gap-[25px]">
          {options.map((option, index) => {
            return (
              <QuizButton
                option={option}
                letter={getLetterByIndexNumber(index)}
                key={index}
              />
            );
          })}
        </div>
        {selected && (
          <div className="w-full h-14 mt-6 flex justify-end text-white font-bold">
            <NextButton />
          </div>
        )}
      </div>
    </div>
  );
}
