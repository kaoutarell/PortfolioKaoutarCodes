import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src="/assets/avatar-1.svg" alt="" className="home__img" />
        <h1 className="home__name">Kaoutar</h1>
        <span className="home__education">I'm a SOEN ENGR</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Get to know me better
        </a>
        <ScrollDown />
        <Shapes />
      </div>
    </section>
  );
};

export default Home;
