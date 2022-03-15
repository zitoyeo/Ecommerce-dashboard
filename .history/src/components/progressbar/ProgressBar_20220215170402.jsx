import React from "react";
import './progress-bar.scss';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__inner"></div>
    </div>
  );
};

export default ProgressBar;
