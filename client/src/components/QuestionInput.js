import React from "react";

export default function QuestionInput({
  onChangeProp,
  chromeClass,
  placeholder,
  value
}) {
  return (
    <textarea
      name="knowme"
      id="knowme"
      className={`paper-text ${chromeClass} paper-text-mtop paper-text-area`}
      placeholder={placeholder}
      onChange={onChangeProp}
      value={value}
    />
  );
}
