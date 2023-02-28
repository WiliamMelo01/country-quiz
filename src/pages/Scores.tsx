import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import UndrawWinnerImage from "../assets/undraw_winners_ao2o2.svg";
import { ScoreContext, scoreInterface } from "../context/score";
import { restartGame } from "../redux/quizSlice";

export default function Scores() {
  const { score, setScore } = useContext(ScoreContext) as scoreInterface;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    setScore(0);
    dispatch(restartGame());
    navigate("/");
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-quiz bg-center font-poppins font-medium">
      <h1 className="w-[464px] text-left text-3xl text-white uppercase mb-4 font-bold">
        Country Quiz
      </h1>
      <div className="w-[464px] min-h-[515px] bg-white rounded-3xl py-16 px-8   relative flex flex-col items-center">
        <img
          src={UndrawWinnerImage}
          alt="Undraw adventure image"
          className="w-[238px] h-[128px]"
        />
        <h2 className="text-5xl text-[#1D355D] font-bold mt-[70px]">Results</h2>
        <p className="text-[#1D355D] mb-[70px]">
          You got{" "}
          <span className="text-[#6FCF97] text-3xl font-bold">{score}</span>{" "}
          correct answers
        </p>
        <button
          className="w-[209px] h-14 rounded-xl text-[#1D355D] border-2 border-[#1D355D]"
          onClick={handleClick}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
