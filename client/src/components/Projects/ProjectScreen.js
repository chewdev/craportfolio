import React from "react";
import Image from "./Image";
import Info from "./Info";
import Guide from "./Guide";

export default function ProjectScreen({
  tvDisplayType,
  onOpenProject,
  projectData,
  remoteSetInd,
  guide,
  currProjInd
}) {
  const project = projectData[currProjInd];
  return (
    <div className="project-container">
      {tvDisplayType === "image" ? (
        <Image project={project} onOpenProject={onOpenProject} />
      ) : tvDisplayType === "info" ? (
        <Info project={project} />
      ) : (
        <Guide
          projectData={projectData}
          remoteSetInd={remoteSetInd}
          guide={guide}
          currProjInd={currProjInd}
        />
      )}
      <div className="top-tv-base" />
      <div className="bottom-tv-base" />
    </div>
  );
}
