import React from "react";

export default function RemoteButton({ onClick, children }) {
  return (
    <li className="projects-remote-input" onClick={onClick}>
      <button className="projects-remote-input-div">{children}</button>
    </li>
  );
}
