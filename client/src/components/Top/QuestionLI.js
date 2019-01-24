import React from "react";
import Typist from "react-typist";

export default function QuestionLI({ obj, getAnswer }) {
  return (
    <Typist
      avgTypingDelay={10}
      stdTypingDelay={10}
      cursor={{ show: false }}
      key={obj.question}
    >
      <li key={obj.question} className="question-option">
        <button
          className="question-option-button"
          onClick={() => getAnswer(obj.question)}
        >
          {obj.question}
        </button>
        <br />
      </li>
    </Typist>
  );
}
