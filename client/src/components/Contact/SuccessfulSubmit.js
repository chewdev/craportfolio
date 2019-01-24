import React from "react";
import ReactTypist from "react-typist";

export default function SuccessfulSubmit({ submitted }) {
  return submitted ? (
    <ReactTypist
      avgTypingDelay={30}
      stdTypingDelay={15}
      cursor={{ show: false }}
    >
      <div className="show-success">
        <h2>Successfully submitted. Thank you for reaching out!</h2>
      </div>
    </ReactTypist>
  ) : null;
}
