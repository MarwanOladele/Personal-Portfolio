import React from "react";
import asset1 from "../Assets/asset1.png";
import asset2 from "../Assets/asset2.png";
import asset3 from "../Assets/asset3.png";

const Project = () => {
  return (
    <>
      <div className="project-main">
        <h1 className="project-header">My Recent Projects</h1>

        <div className="project">
          <img
            className="projectImage"
            src={asset3}
            alt="tour app"
          />
          <h1>Tour App</h1>
          <p>frontend, 2022</p>
          <p className="explanation">An app use in picking desired places for tourism</p>
          <div className="stack">
            <span>React</span>
            <span>es6</span>
          </div>
          <a href="https://marwantourproject.netlify.app" target="blank">
            See Project 
          </a>
        </div>
        <div className="project">
          <img
            className="projectImage"
            src={asset1}
            alt="Product Landing Page"
          />
          <h1>Portfolio</h1>
          <p>frontend, 2022</p>
          <p className="explanation">A personalized Portfolio design</p>
          <div className="stack">
            <span>React</span>
            <span>es6</span>
            <span>Styled Component</span>
          </div>
          <a href="https://ooladelemarwan.netlify.app" target="blank">
            See Project
          </a>
        </div>
        <div className="project">
          <img
            className="projectImage"
            src={asset2}
            alt="Product Landing Page"
          />
          <h1>Meditech</h1>
          <p>frontend, 2021</p>
          <p className="explanation">A Hospital Management Application</p>
          <div className="stack">
            <span>React</span>
            <span>es6</span>
          </div>
          <a href="https://meditech-react.netlify.app/" target="blank">
            See Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
