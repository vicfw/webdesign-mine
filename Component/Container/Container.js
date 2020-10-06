import React from "react";
import classes from "./Container.module.css";

function Container(props) {
  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: props.background,
        paddingTop: props.paddingTop,
      }}
    >
      {props.children}
    </div>
  );
}

export default Container;
