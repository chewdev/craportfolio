import React from "react";
import classnames from "classnames";

export default function RemoteButton({ onClick, children, guide, ok }) {
  return (
    <li
      className={classnames("projects-remote-input", {
        "projects-remote-input--guide": guide,
        "projects-remote-input--ok": ok
      })}
      onClick={onClick}
    >
      <button
        className={classnames("projects-remote-input-div", {
          "projects-remote-input-div--text": guide,
          "projects-remote-input-div--ok": ok
        })}
      >
        {children}
      </button>
    </li>
  );
}
