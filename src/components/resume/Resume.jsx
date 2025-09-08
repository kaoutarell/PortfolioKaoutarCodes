import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">My Journey</h2>

      <div className="resume__container">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <div className="timeline">
            <h3 className="timeline__header">Education</h3>
            {Data.map((val, id) =>
              val.category === "education" ? (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  subtitle={val.subtitle}
                  year={val.year}
                  desc={val.desc}
                  techStack={val.techStack}
                />
              ) : null
            )}
          </div>

          <div className="timeline">
            <h3 className="timeline__header">Certifications</h3>
            {Data.map((val, id) =>
              val.category === "certification" ? (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  subtitle={val.subtitle}
                  year={val.year}
                  desc={val.desc}
                  techStack={val.techStack}
                />
              ) : null
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="timeline">
          <h3 className="timeline__header">Experience</h3>
          {Data.map((val, id) =>
            val.category === "experience" ? (
              <Card
                key={id}
                icon={val.icon}
                title={val.title}
                subtitle={val.subtitle}
                year={val.year}
                desc={val.desc}
                techStack={val.techStack}
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
