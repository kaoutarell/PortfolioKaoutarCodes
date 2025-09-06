"use client";
import React from "react";
import { Link } from "react-scroll";

const ScrollDown = () => {
  return (
    <div className="scroll__down">
      <Link
        to="about"
        smooth={true}
        offset={-40}
        duration={900}
        className="mouse__wrapper"
      >
        {/* <span className="home__scroll-name">Scroll Down</span> */}
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </Link>
    </div>
  );
};

export default ScrollDown;
