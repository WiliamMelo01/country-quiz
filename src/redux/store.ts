import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";

export const store = configureStore({
  reducer: { quizSlice },
});
