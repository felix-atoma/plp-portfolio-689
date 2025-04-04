import React from "react";
import "./BubbleBackground.css";

const BubbleBackground = () => {
  return (
    <div className="bubble-container">
      {[...Array(20)].map((_, i) => (
        <span key={i} className="bubble" style={{ "--i": i }}></span>
      ))}
    </div>
  );
};

export default BubbleBackground;
