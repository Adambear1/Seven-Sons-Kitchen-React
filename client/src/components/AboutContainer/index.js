import React from "react";
import "./styles.css";
import AboutHistory from "../AboutHistory";
import AboutValues from "../AboutValues";
import AboutPromise from "../AboutPromise";

function AboutContainer() {
  return (
    <div className="about-container">
      <AboutHistory />
      <AboutValues />
      <AboutPromise />
    </div>
  );
}

export default AboutContainer;
