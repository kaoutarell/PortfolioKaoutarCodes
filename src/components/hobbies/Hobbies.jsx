"use client";
import { useState } from "react";
import "./hobbies.css";

const hobbies = [
  {
    title: "📖 Reading",
    quote:
      "A reader lives a thousand lives before he dies. — George R.R. Martin",
  },
  {
    title: "🥋 Martial Arts",
    quote:
      "Adapt what's useful, reject what's useless, and add what's specifically your own. — Bruce Lee",
  },
  {
    title: "🌍 Traveling",
    quote:
      "The world is a book, and those who do not travel read only one page. — Augustine",
  },
  {
    title: "🎨 Drawing",
    quote: "Every artist was first an amateur. — Ralph Waldo Emerson",
  },
];

const Hobbies = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [animKey, setAnimKey] = useState(0); // 🔑 force re-render

  const triggerAnimation = (dir, newIndex) => {
    setDirection(dir);
    setIndex(newIndex);
    setAnimKey((k) => k + 1); // change key → restart animation
  };

  const nextSlide = () => {
    triggerAnimation("next", (index + 1) % hobbies.length);
  };

  const prevSlide = () => {
    triggerAnimation("prev", (index - 1 + hobbies.length) % hobbies.length);
  };

  const visibleHobbies = [
    hobbies[index],
    hobbies[(index + 1) % hobbies.length],
    hobbies[(index + 2) % hobbies.length],
  ];

  return (
    <section className="container section" id="hobbies">
      <h2 className="section__title">Hobbies</h2>

      <div className="carousel">
        <button className="carousel__btn prev" onClick={prevSlide}>
          ←
        </button>

        <div
          key={animKey} // 🔑 forces re-render so CSS animation runs again
          className={`carousel__track animate-${direction}`}
        >
          {visibleHobbies.map((hobby, i) => (
            <div className="hobby__card" key={i}>
              <h3 className="hobby__title">{hobby.title}</h3>
              <p className="hobby__quote">"{hobby.quote}"</p>
            </div>
          ))}
        </div>

        <button className="carousel__btn next" onClick={nextSlide}>
          →
        </button>
      </div>
    </section>
  );
};

export default Hobbies;
