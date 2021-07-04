import React, { useState, useEffect } from "react";
import "../layout/Timer.css";

// calculates the time remaining between the current date and the first day of HacktoberFest
const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`10/01/${year}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Timer() {
  const [year, setYear] = useState();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setYear(new Date().getFullYear());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

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
                <span className="numbers">{timeLeft.days}</span>

                <span className="time">days</span>
              </div>
            </li>
            <li className="circle__block">
              <div className="circle">
                <span className="numbers">{timeLeft.hours}</span>

                <span className="time">hours</span>
              </div>
            </li>
            <li className="circle__block">
              <div className="circle">
                <span className="numbers">{timeLeft.minutes}</span>

                <span className="time">minutes</span>
              </div>
            </li>
            <li className="circle__block">
              <div className="circle">
                <span className="numbers">{timeLeft.seconds}</span>

                <span className="time">seconds</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
