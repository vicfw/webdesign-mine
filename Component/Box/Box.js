import React from "react";
import classes from "./Box.module.css";
function Box(props) {
  return (
    <div className={classes.box}>
      <span className={classes.icon}>{props.icon}</span>
      <h3 className={classes.heading}>{props.heading}</h3>
      <p className={classes.para}>{props.para}</p>
    </div>
  );
}

export default Box;
