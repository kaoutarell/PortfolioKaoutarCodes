import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src="/assets/my_avatar.png" alt="" className="home__img" />
        <h1 className="home__name">Hi there 👋🏻</h1>
        <span className="home__education">
          I'm Kaoutar, a final-year software engineering student (almost
          graduating 🎓, fingers crossed 🤞🏻)
        </span>
        <p className="home__education">
          Ambitious with purpose,{" "}
          <span className="highlighted">driven by innovation</span>
          and fueled by a constant pursuit of excellence. Passionate about
          technology,
          <span className="highlighted">committed to impact</span>, and
          dedicated to amplifying the presence and power of women in STEM.
        </p>
        <p className="home__education">
          I prioritize growth through conferences and summits whenever timing
          and budget
          <span className="highlights_2"> cooperate</span>. Outside the digital
          sphere, I am a kung fu student, because training balances discipline
          with creativity. Calm in demeanor, sharp in thinking, naturally
          humorous, and unapologetically respectful of rest—because recovery
          fuels excellence.
        </p>
        <HeaderSocials />
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
