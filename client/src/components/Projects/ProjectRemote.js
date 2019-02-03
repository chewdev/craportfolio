import React from "react";
import RemoteButton from "./RemoteButton";

export default function ProjectRemote({
  remoteSetInd,
  changeAuto,
  remoteLightClass,
  projIntervalId,
  guide,
  info,
  up,
  prevProj,
  down,
  nextProj,
  ok
}) {
  const liArr = (() => {
    let liArr = [];
    for (let i = 0; i <= 9; i++) {
      liArr.push(
        <RemoteButton key={`remote-${i}`} onClick={() => remoteSetInd(i)}>
          {i}
        </RemoteButton>
      );
    }
    return liArr;
  })();
  return (
    <ul className="projects-remote">
      <li className="projects-remote-number-li projects-remote-number-li--container">
        <ul className="projects-remote-number-ul projects-remote-number-ul--power">
          <li className="projects-remote-input" onClick={changeAuto}>
            <button className="projects-remote-input-div">
              {projIntervalId === null ? (
                <i className="fas fa-play" />
              ) : (
                <i className="fas fa-pause" />
              )}
            </button>
          </li>
          <li className="projects-remote-input projects-remote-input--power">
            <div className={`projects-remote-power-ind ${remoteLightClass}`} />
          </li>
        </ul>
      </li>
      <li className="projects-remote-number-li projects-remote-number-li--container">
        <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
          <li
            className="projects-remote-input projects-remote-input--guide"
            onClick={guide}
          >
            <button className="projects-remote-input-div projects-remote-input-div--text">
              {" "}
              GUIDE{" "}
            </button>
          </li>
          <li
            className="projects-remote-input projects-remote-input--info"
            onClick={info}
          >
            <button className="projects-remote-input-div projects-remote-input-div--text">
              {" "}
              INFO{" "}
            </button>
          </li>
        </ul>
      </li>
      <li className="projects-remote-number-li projects-remote-number-li--container">
        <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
          <li className="projects-remote-input" onClick={up}>
            <button className="projects-remote-input-div">
              {" "}
              <i className="fas fa-chevron-up" />{" "}
            </button>
          </li>
        </ul>
      </li>
      <li className="projects-remote-number-li projects-remote-number-li--container">
        <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
          <li className="projects-remote-input" onClick={prevProj}>
            <button className="projects-remote-input-div">
              {" "}
              <i className="fas fa-chevron-left" />{" "}
            </button>
          </li>
          <li
            className="projects-remote-input projects-remote-input--ok"
            onClick={ok}
          >
            <button className="projects-remote-input-div projects-remote-input-div--ok">
              OK
            </button>
          </li>
          <li className="projects-remote-input" onClick={nextProj}>
            <button className="projects-remote-input-div">
              {" "}
              <i className="fas fa-chevron-right" />{" "}
            </button>
          </li>
        </ul>
      </li>
      <li className="projects-remote-number-li projects-remote-number-li--container">
        <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
          <li className="projects-remote-input" onClick={down}>
            <button className="projects-remote-input-div">
              {" "}
              <i className="fas fa-chevron-down" />{" "}
            </button>
          </li>
        </ul>
      </li>
      <li className="projects-remote-number-li">
        <ul className="projects-remote-number-ul">{liArr.slice(1, 4)}</ul>
      </li>
      <li className="projects-remote-number-li">
        <ul className="projects-remote-number-ul">{liArr.slice(4, 7)}</ul>
      </li>
      <li className="projects-remote-number-li">
        <ul className="projects-remote-number-ul">{liArr.slice(7, 10)}</ul>
      </li>
      <li>
        <ul className="projects-remote-number-ul">{liArr.slice(0, 1)}</ul>
      </li>
    </ul>
  );
}
