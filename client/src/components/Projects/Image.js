import React from "react";

export default function Image({ project, onOpenProject }) {
  let { imgSrc, imgSrcSmall, imgSrc2x, imgSrcSmall2x, link, alt } = project;
  imgSrcSmall = imgSrcSmall || imgSrc;
  imgSrc2x = imgSrc2x || imgSrc;
  imgSrcSmall2x = imgSrcSmall2x || imgSrcSmall;

  return (
    <a
      className="project-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onOpenProject}
    >
      <picture>
        <source
          srcSet={`${imgSrc} 750w, ${imgSrc2x} 1500w`}
          media="(min-width: 540px)"
        />
        <img
          srcSet={`${imgSrcSmall} 350w, ${imgSrcSmall2x} 700w`}
          alt={alt}
          className="project-tv"
        />
      </picture>
    </a>
  );
}
