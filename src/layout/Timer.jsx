import React from "react";
import "../layout/Timer.css";

export default function Timer() {
  return (
    <div className="timer">
      <div className="timer__container container">
        <div className="timer-title">
          <span>%50 Off</span>
        </div>
        <div className="timer-text">
          <span>Limited Time Offer</span>
        </div>
        <div className="timer-action">
          <a href="#">contact me</a>
        </div>
        <div className="timer-display">
          <ul className="circles">
            <li className="circle__block">
              <div className="circle">
                <span className="numbers">180</span>

                <span className="time">days</span>
              </div>
            </li>
            <li className="circle__block">
              <div className="circle">
                <span className="numbers">12</span>

                <span className="time">hours</span>
              </div>
            </li>
            <li className="circle__block">
              <div className="circle">
                <span className="numbers">48</span>

                <span className="time">minutes</span>
              </div>
            </li>
            <li className="circle__block">
              <div className="circle">
                <span className="numbers">34</span>

                <span className="time">seconds</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
