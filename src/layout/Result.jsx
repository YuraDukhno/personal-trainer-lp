import React from "react";
import "../layout/Result.css";

export default function Result(props) {
  return (
    <div className="result">
      <div className="result_container container">
        <span className="result-title">{props.title}</span>
        <span className="result-text">{props.text}</span>
        <span className="result-bottom-line"></span>
      </div>
    </div>
  );
}
