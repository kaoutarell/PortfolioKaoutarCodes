import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/kaoutarelazzab/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/kaoutarell"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      {/* <a href="#" className="home__social-link" target="_blank">
        <i className="fa-brands fa-behance"></i>
      </a> */}
    </div>
  );
};

export default HeaderSocials;
