import React from "react";

type QuestionProps = {
  question: string;
  image?: string;
};

export default function Question({ question, image }: QuestionProps) {
  return (
    <>
      {image && (
        <img
          src={image}
          alt={`${question}'s flag`}
          className="w-[120px] h-[70px] mb-6 shadow-2xl border border-[#dfdede]"
        />
      )}
      <h2 className="text-blue-500 text-lg font-bold mb-8">{question}</h2>
    </>
  );
}
