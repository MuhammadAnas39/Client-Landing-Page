import React from "react";
import "./circle.css";

const Circle = ({ position }) => {
  return <div className={`Circle ${position}`} />;
};

export default Circle;
