import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/questions";

type questions = {
  question: string;
  options: string[];
  image?: string;
  answer: string;
}[];

let questions: questions = [];

let currentQuestionIndex = 0;

function start() {
  currentQuestionIndex = 0;
  questions = [...data].sort(() => Math.random() - 0.5);
  questions[currentQuestionIndex] = Object.assign(
    {},
    questions[currentQuestionIndex],
    {
      options: questions[currentQuestionIndex].options
        .slice()
        .sort(() => Math.random() - 0.5),
    }
  );
}

start();

const INITIAL_STATE = {
  currentQuestion: questions[currentQuestionIndex],
  madeAMistake: false,
  currentQuestionIndex: 0,
  questionLength: questions.length,
};

const quizSlice = createSlice({
  name: "quizSlice",
  initialState: INITIAL_STATE,
  reducers: {
    nextQuestion(state) {
      currentQuestionIndex += 1;
      questions[currentQuestionIndex] = Object.assign(
        {},
        questions[currentQuestionIndex],
        {
          options: questions[currentQuestionIndex].options
            .slice()
            .sort(() => Math.random() - 0.5),
        }
      );

      return {
        ...state,
        currentQuestion: questions[currentQuestionIndex],
        currentQuestionIndex,
      };
    },
    userMadeAMistake(state) {
      return { ...state, madeAMistake: true };
    },
    clearMistakes(state) {
      return { ...state, madeAMistake: false };
    },
    restartGame(state) {
      start();
      return {
        ...INITIAL_STATE,
        currentQuestion: questions[currentQuestionIndex],
        questionLength: questions.length,
      };
    },
  },
});

export default quizSlice.reducer;
export const { nextQuestion, userMadeAMistake, clearMistakes, restartGame } =
  quizSlice.actions;
