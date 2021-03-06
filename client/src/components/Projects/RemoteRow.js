import React from "react";
import classnames from "classnames";

export default function RemoteRow({
  children,
  container,
  arrows,
  power,
  number
}) {
  return (
    <li
      className={classnames("projects-remote-number-li", {
        "projects-remote-number-li--container": container,
        "projects-remote-number-li--number": number
      })}
    >
      <ul
        className={classnames("projects-remote-number-ul", {
          "projects-remote-number-ul--arrows": arrows,
          "projects-remote-number-ul--power": power
        })}
      >
        {children}
      </ul>
    </li>
  );
}
