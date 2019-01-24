import React from "react";
import Typist from "react-typist";

export default function Answer({ currentText, chromeClass }) {
  return (
    <Typist avgTypingDelay={10} stdTypingDelay={10} cursor={{ show: false }}>
      <p className={`paper-text-answer ${chromeClass}`}>{currentText}</p>
    </Typist>
  );
}
