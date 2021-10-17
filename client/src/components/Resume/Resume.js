import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <button className="download">
       Download Resume
      </button>
      <h2> Front-end </h2>
      <ul className="list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>

      <h2> Back-end </h2>
      <ul className="list">
        <li>SQL</li>
        <li>Node</li>
        <li>MongoDB</li>
        <li>Express</li>
      </ul>
    </div>
  );
};

export default Resume;
