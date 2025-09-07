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
          Ambitious? <span className="highlighted">Definitely!</span> Passionate
          about tech? <span className="highlighted">Always.</span> Inspiring
          women in STEM? <span className="highlighted">That's my jam</span>.
        </p>
        <p className="home__education">
          I attend conferences and summits whenever my calendar and bank account{" "}
          <span className="highlights_2">agree</span> to sponsor me. Outside the
          tech world, I train in kung fu (yes, balance in life can literally
          mean high kicks 🥋). Personality-wise? Think of me as funny but calm,
          smart but occasionally clumsy (and yes, lazy Sundays are sacred 😴).
        </p>
        <p className="home__education">
          I also <span className="highlights_2">love meeting new people</span>{" "}
          and expanding my network 🌝 so if you've made it this far, let's
          connect!
        </p>
        <HeaderSocials />
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
