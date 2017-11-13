import React from "react";
import "./InfoBox.css";

export const InfoBox = ({ icon, text, color }) => (
  <div className="info-box" onClick={() => alert("You Clicked: " + text)}>
    <span className={`info-box-icon bg-${color}`}>
      <img className="logo" src={icon} />
    </span>
    <div className="info-box-content">
        <span className="info-box-text">{text}</span>
        <span className="info-box-number">1,410</span>
    </div>
  </div>
);
