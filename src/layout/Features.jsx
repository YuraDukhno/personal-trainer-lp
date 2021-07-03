import React from "react";
import "../layout/Features.css";

export default function Features() {
  return (
    <div className="features">
      <div className="features_container container">
        <ul className="features-list">
          <li className="features-item one">
            <div className="item-icon">
              <i class="fa fa-check-circle"></i>
            </div>
            <div className="item-title">
              <span>All Week</span>
            </div>
            <div className="item-text">
              <span>
                Cras sagittis. Vivamus in erat urna cursus vestibulum.
                Vestibulum rutrum, mi nec elementum vehiculaid fringilla.
              </span>
            </div>
          </li>
          <li className="features-item two">
            <div className="item-icon">
              <i class="fa fa-group"></i>
            </div>
            <div className="item-title">
              <span>Versatile Activity</span>
            </div>
            <div className="item-text">
              <span>
                Cras sagittis. Vivamus in erat urna cursus vestibulum.
                Vestibulum rutrum, mi nec elementum vehiculaid fringilla.
              </span>
            </div>
          </li>
          <li className="features-item three">
            <div className="item-icon">
              <i class="fa fa-deviantart"></i>
            </div>
            <div className="item-title">
              <span>Best Gear</span>
            </div>
            <div className="item-text">
              <span>
                Cras sagittis. Vivamus in erat urna cursus vestibulum.
                Vestibulum rutrum, mi nec elementum vehiculaid fringilla.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
