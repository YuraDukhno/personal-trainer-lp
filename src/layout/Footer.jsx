import React from "react";
import "../layout/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer-title__block">
          <span>Find Your Time</span>
          <span>Contact Me</span>
          <span className="pricing__bottom-line"></span>
        </div>
        <div className="footer-icons"></div>
        <ul className="footer-icons__list">
          <li className="footer-icons__item">
            <div className="blox_round_icon">
              <i className="fa fa-location-arrow"></i>
            </div>
            <span>Find Me</span>
            <span>info@trainer.com</span>
          </li>
          <li className="footer-icons__item">
            <div className="blox_round_icon">
              <i className="fa fa-phone"></i>
            </div>
            <span>Call Me</span>
            <span>info@trainer.com</span>
          </li>
          <li className="footer-icons__item">
            <div className="blox_round_icon">
              <i className="fa fa-envelope"></i>
            </div>
            <span>Find Me</span>
            <span>info@trainer.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
