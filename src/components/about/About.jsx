import React from "react";
import "./about.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src="/assets/avatar_coding.png" alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description ">
              🛠️ These are basically the things I know how to do… but I’m
              currently tanking 5 heavy school classes while running a kinda
              full-time job in the background so consider this my
              “multithreading” aura. ⚡
            </p>
            <a href="/assets/kaoutars_resume.pdf" download className="btn">
              Download Resume <i className="icon-cloud-download"></i>
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Software Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Software Design</h3>
                <span className="skills__number">95%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Cloud Computing</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cloudcomp"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">System Security</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage systemsecurity"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
