import React from "react";
import "../layout/Practices.css";

export default function Practices() {
  return (
    <div className="practices">
      <div className="practices__container container">
        <ul className="practices-list">
          <li className="practices__item item-one">
            <span>1</span>
            <h3>Cardio Training</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam
              purus, sagittis quis augue et, dictum rhoncus ante.
            </p>
          </li>
          <li className="practices__item item-two">
            <span>2</span>
            <h3>
              Body
              <br /> Building
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam
              purus, sagittis quis augue et, dictum rhoncus ante.
            </p>
          </li>
          <li className="practices__item item-three">
            <span>3</span>
            <h3>
              Group
              <br /> Workout
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam
              purus, sagittis quis augue et, dictum rhoncus ante.
            </p>
          </li>
          <li className="practices__item item-four">
            <span>4</span>
            <h3>
              Kick
              <br /> Boxing
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam
              purus, sagittis quis augue et, dictum rhoncus ante.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
