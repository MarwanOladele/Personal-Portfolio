import React from "react";
import { Link } from "react-router-dom";

const Project = ({
  img,
  title,
  stack,
  explanation,
  tool1,
  tool2,
  tool3,
  link,
}) => {
  return (
    <>
      <div className="project">
        <img className="projectImage" src={img} alt={title} />
        <h1>{title}</h1>
        <p>{stack}</p>
        <p className="explanation">{explanation}</p>
        <div className="stack">
          <span>{tool1}</span>
          <span>{tool2}</span>
          <span>{tool3}</span>
        </div>
        <a href={link} target="blank">
          See Project
        </a>
      </div>
    </>
  );
};

export default Project;
