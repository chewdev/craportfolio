import React from "react";
import classnames from "classnames";

export default function LightIndicator({ remoteLightClass }) {
  return (
    <li className="projects-remote-input projects-remote-input--power">
      <div
        className={classnames("projects-remote-power-ind", {
          [remoteLightClass]: remoteLightClass
        })}
      />
    </li>
  );
}
