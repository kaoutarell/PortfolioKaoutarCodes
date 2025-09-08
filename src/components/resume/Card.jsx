"use client";
import React from "react";

const Card = (props) => {
  const getTechIconUrl = (tech) => {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech}.svg`;
  };

  const getTechLabel = (tech) => {
    const techLabels = {
      docker: "docker",
      kubernetes: "kubernetes",
      javascript: "javascript",
      react: "react",
      nextdotjs: "nextjs",
      dotnet: "dotnet",
      python: "python",
      csharp: "csharp",
      cplusplus: "cpp",
      java: "java",
      elasticsearch: "elasticsearch",
    };
    return techLabels[tech] || tech;
  };

  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <h4 className="timeline__subtitle">{props.subtitle}</h4>
      <h4 className="timeline__subtitle">{props.desc}</h4>

      {props.techStack && props.techStack.length > 0 && (
        <div className="tech-stack">
          {props.techStack.map((tech, index) => (
            <div key={index} className="tech-item" title={getTechLabel(tech)}>
              <img
                src={getTechIconUrl(tech)}
                alt={getTechLabel(tech)}
                className="tech-icon"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
