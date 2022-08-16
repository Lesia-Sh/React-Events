import React from "react";
import "./Weather.css";

export default function Weather() {
  function showTemperature(event) {
    event.preventDefault();
    alert("Coming soon...");
  }
  return (
    <button className="button1" onClick={showTemperature}>
      Current Temperature
    </button>
  );
}
