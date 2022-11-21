import React from "react";
import data1 from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="project-main">
      <h1 className="project-header">My Recent Projects</h1>
      {data1.map((data) => {
        return <Project key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Projects;