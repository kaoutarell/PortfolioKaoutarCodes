import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">+999</h3>
          <span className="about__subtitles">Leet Code Challenge Done</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-trophy"></i>
        <div>
          <h3 className="about__title">5</h3>
          <span className="about__subtitles">Hackathons</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitles">Satisfied clients</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-pin"></i>
        <div>
          <h3 className="about__title">10</h3>
          <span className="about__subtitles">Projects</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
