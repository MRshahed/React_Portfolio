import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shahed</h1>

        <ul className="footer__list">
          <li>
            <a className="footer__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="footer__link" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="footer__link" href="#testimonial">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/shahed.hossen/"
            className="footer__social-icon"
            target=""
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/Shahedhossen.akash"
            className="footer__social-icon"
            target=""
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/MRshahed"
            className="footer__social-icon"
            target=""
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/shahedhossen/"
            className="footer__social-icon"
            target=""
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">© 2022 Shahed Hossen </span>
      </div>
    </footer>
  );
};

export default Footer;
