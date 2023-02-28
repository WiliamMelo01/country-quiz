import React from "react";

type QuestionProps = {
  question: string;
};

export default function Question({ question }: QuestionProps) {

  return <h2 className="text-[#2F527B] text-lg font-bold mb-8">{question}</h2>;
}
