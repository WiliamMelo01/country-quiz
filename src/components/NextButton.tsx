import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ScoreContext, scoreInterface } from "../context/score";
import {
  selectedOptionInterface,
  selectedOption,
} from "../context/selectedOption";
import { clearMistakes, nextQuestion } from "../redux/quizSlice";
import { store } from "../redux/store";

export default function NextButton() {
  const quizData = store.getState().quizSlice;

  const { score, setScore } = useContext(ScoreContext) as scoreInterface;
  const { setSelected } = useContext(selectedOption) as selectedOptionInterface;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    if (!quizData.madeAMistake) {
      setScore(score + 1);
      setSelected("");
    } else {
      setSelected("");
    }
    if (quizData.currentQuestionIndex + 1 === quizData.questionLength) {
      navigate("/scores");
    } else {
      dispatch(nextQuestion());
    }
    dispatch(clearMistakes());
  }

  return (
    <button
      className="h-full w-[116px] bg-[#F9A826] rounded-xl"
      onClick={handleClick}
    >
      Next
    </button>
  );
}
