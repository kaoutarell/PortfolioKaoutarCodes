import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#">
              <img src="/assets/blog-1.svg" alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Best Dev App Dev Tool For Your Projects
            </h3>
            <div className="blog__meta">
              <span>Feb 9th, 2022</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="#">
              <img src="/assets/blog-2.svg" alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Payment bla bla</h3>
            <div className="blog__meta">
              <span>March 10th, 2024</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Business</span>
            </a>
            <a href="#">
              <img src="/assets/blog-3.svg" alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              3 Things To Know About Startup Business
            </h3>
            <div className="blog__meta">
              <span>another date here</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
