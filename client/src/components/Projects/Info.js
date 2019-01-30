import React from "react";

export default function Info({ project }) {
  return (
    <div className="project-info project-link">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
