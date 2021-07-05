import React from "react";
import "../layout/Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing__container container">
        <div className="pricing-title__block">
          <span className="pricing-title">Pricing</span>
          <span className="pricing-text">For a limited time only!</span>
          <span className="pricing-bottom-line"></span>
        </div>
        <div className="pricing-list__block">
          <ul className="pricing-list">
            <li className="pricing-item-body">
              <div className="item-header">
                <div className="pricing-item-title">$15</div>
                <div className="pricing-item-subtitle">Private training</div>
              </div>
              <div className="pricing-item-main">
                <span>Personal Trainer</span>
                <span>2 Hours</span>
                <span>One Month</span>
              </div>
              <div className="item__button">
                <a href="">Buy Now</a>
              </div>
            </li>
            <li className="pricing-item-body">
              <div className="item-header">
                <div className="pricing-item-title">$15</div>
                <div className="pricing-item-subtitle">Private training</div>
              </div>
              <div className="pricing-item-main">
                <span>Personal Trainer</span>
                <span>2 Hours</span>
                <span>One Month</span>
              </div>
              <div className="item__button">
                <a href="">Buy Now</a>
              </div>
            </li>
            <li className="pricing-item-body">
              <div className="item-header">
                <span className="pricing-item-title">$15</span>
                <span className="pricing-item-subtitle">Private training</span>
              </div>
              <div className="pricing-item-main">
                <span>Personal Trainer</span>
                <span>2 Hours</span>
                <span>One Month</span>
              </div>
              <div className="item__button">
                <a href="">Buy Now</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
