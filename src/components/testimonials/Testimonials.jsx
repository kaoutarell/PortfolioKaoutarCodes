"use client";
import React from "react";
import "./testimonials.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper importations
import "swiper/css";
import "swiper/css/pagination";

const Data = [
  {
    id: 1,
    image: "/assets/avatar-1.svg",
    title: "Full Name",
    subtitle: "What does this person do",
    comment: "Small comment about you",
  },
  {
    id: 3,
    image: "/assets/avatar-3.svg",
    title: "Full Name",
    subtitle: "What does this person do",
    comment: "Small comment about you",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">Facts</h2>
      <Swiper
        className="testimonials__container grid"
        // swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {Data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
