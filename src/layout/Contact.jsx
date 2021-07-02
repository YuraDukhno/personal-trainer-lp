import React from "react";
import "../layout/Contact.css";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__container container">
        <div className="contact-title">
          <span>
            Contact me today and get
            <br /> three workouts free!
          </span>
        </div>
        <div className="contact-button">
          <Button text={"Get Your Free Pass"} />
        </div>
      </div>
    </div>
  );
}
