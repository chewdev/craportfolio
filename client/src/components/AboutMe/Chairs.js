import React from "react";
import classnames from "classnames";

function Chair({ bottom }) {
  return (
    <div className="about-me__chair-container">
      <div
        className={classnames("about-me__chair", {
          "about-me__chair--bottom": bottom
        })}
      />
    </div>
  );
}

export default function Chairs({ bottom }) {
  return (
    <div className="about-me__chairs-container">
      <Chair bottom={bottom} />
      <Chair bottom={bottom} />
    </div>
  );
}
