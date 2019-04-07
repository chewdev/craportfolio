import React from "react";

export default function Image({ project, onOpenProject }) {
  let { imgSrc, imgSrcSmall, link, alt } = project;
  imgSrcSmall = imgSrcSmall || imgSrc;
  return (
    <a
      className="project-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onOpenProject}
    >
      <picture>
        <source srcSet={imgSrc} media="(min-width: 540px)" />
        <img src={imgSrcSmall} alt={alt} className="project-tv" />
      </picture>
    </a>
  );
}
