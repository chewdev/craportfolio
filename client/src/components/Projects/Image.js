import React from "react";

export default function Image({ project, onOpenProject }) {
  return (
    <a
      className="project-link"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onOpenProject}
    >
      <img className="project-tv" src={project.imgSrc} alt={project.alt} />
    </a>
  );
}
