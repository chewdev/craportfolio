import React from "react";
import Typist from "react-typist";
import QuestionLI from "./QuestionLI";

export default function Questions({ questionArr, textInput, getAnswer }) {
  return questionArr.length === 0 && textInput !== "" ? (
    <Typist avgTypingDelay={10} stdTypingDelay={10} cursor={{ show: false }}>
      <p>No matching questions</p>
    </Typist>
  ) : (
    <ul>
      {questionArr.map(obj => (
        <QuestionLI key={obj.question} getAnswer={getAnswer} obj={obj} />
      ))}
    </ul>
  );
}
