import React from "react";

export default function Guide({
  projectData,
  remoteSetInd,
  guide,
  currProjInd
}) {
  var projArr = projectData.map((project, ind) => {
    return (
      <li
        className="projects-tv-list-item"
        key={ind}
        onClick={() => {
          remoteSetInd(ind);
          guide();
        }}
      >
        <span className="channel-name-span">{project.channelName}</span>
        <span className="channel-ind-span">{ind}</span>
        <span
          className={
            "channel-title-span" +
            (currProjInd === ind ? " projects-tv-list-item--selected" : "")
          }
        >
          {project.title}
        </span>
      </li>
    );
  });
  return (
    <div className="project-link">
      <ul>{projArr}</ul>
    </div>
  );
}
