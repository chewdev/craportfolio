import React from "react";
import RemoteButton from "./RemoteButton";
import Play from "./Play";
import Pause from "./Pause";
import Up from "./Up";
import Left from "./Left";
import Right from "./Right";
import Down from "./Down";
import RemoteRow from "./RemoteRow";
import LightIndicator from "./LightIndicator";

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
      <RemoteRow container={true} power={true}>
        <RemoteButton onClick={changeAuto}>
          {projIntervalId === null ? <Play /> : <Pause />}
        </RemoteButton>
        <LightIndicator remoteLightClass={remoteLightClass} />
      </RemoteRow>
      <RemoteRow container={true} arrows={true}>
        <RemoteButton guide={true} onClick={guide}>
          GUIDE
        </RemoteButton>
        <RemoteButton guide={true} onClick={info}>
          INFO
        </RemoteButton>
      </RemoteRow>
      <RemoteRow container={true} arrows={true}>
        <RemoteButton onClick={up}>
          <Up />
        </RemoteButton>
      </RemoteRow>
      <RemoteRow container={true} arrows={true}>
        <RemoteButton onClick={prevProj}>
          <Left />
        </RemoteButton>
        <RemoteButton ok={true} onClick={ok}>
          OK
        </RemoteButton>
        <RemoteButton onClick={nextProj}>
          <Right />
        </RemoteButton>
      </RemoteRow>
      <RemoteRow container={true} arrows={true}>
        <RemoteButton onClick={down}>
          <Down />
        </RemoteButton>
      </RemoteRow>
      <RemoteRow number={true}>{liArr.slice(1, 4)}</RemoteRow>
      <RemoteRow number={true}>{liArr.slice(4, 7)}</RemoteRow>
      <RemoteRow number={true}>{liArr.slice(7, 10)}</RemoteRow>
      <RemoteRow number={true}>{liArr.slice(0, 1)}</RemoteRow>
    </ul>
  );
}
