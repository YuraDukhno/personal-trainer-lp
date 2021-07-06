import React from "react";
import "../layout/Header.css";
import Button from "../components/Button";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container container">
        <div className="introduction">
          <div className="introduction__content">
            <h1 className="introduction__title">
              Hello,
              <br /> My Name Is
              <br /> Roxie Pump
            </h1>
            <p>
              Get 50% Off
              <br /> For a limited time only!
              <br /> Ends July 2021
            </p>
            <div className="introduction__button">
              <Button text={"contact me"} />
            </div>
          </div>
          <div className="introduction__image">
            <img
              src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/trainer2.jpg"
              alt="Roxie Pump"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
