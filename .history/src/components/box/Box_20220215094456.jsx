import React from "react";
import "./box.scss";

const Box = (props) => {
  const className = {
    box: " box",
    purple: props.puple && "box-purple",
  };

  return <div className="box">Box</div>;
};

export default Box;
