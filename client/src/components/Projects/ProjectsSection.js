import React from "react";
import LazyLoad from "react-lazy-load";
import Projects from "./Projects";

export default function ProjectsSection() {
  return (
    <div id="projects" className="projects">
      <LazyLoad offset={800} throttle={25}>
        <Projects />
      </LazyLoad>
    </div>
  );
}
