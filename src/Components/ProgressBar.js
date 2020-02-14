import React from "react";
import { Line } from "rc-progress";

const ProgressBar = props => {
  return (
    <Line
      style={{ ...props.style, width: "100%", height: "2.5vh", margin: "auto" }}
      percent={props.percentage}
      strokeWidth="2"
      strokeColor="#83d0f2"
    />
  );
};

export default ProgressBar;
