import React from "react";
import "./services.css";

const data = [
  {
    id: 1,
    image: "/assets/service-1.svg",
    title: "UI/UX Design",
    description: "Long text of description to paste here",
  },
  {
    id: 2,
    image: "/assets/service-2.svg",
    title: "Web Dev",
    description: "Long text of description to paste here",
  },
  {
    id: 3,
    image: "/assets/service-3.svg",
    title: "Cloud Computing",
    description: "Long text of description to paste here",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
