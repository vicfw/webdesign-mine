import React from "react";
import classes from "./Button.module.css";
function Button(props) {
  return (
    <React.StrictMode>
      <button
        className={[classes.button, classes[props.color]].join(" ")}
        style={{
          minWidth: props.width,
          height: props.height,
        }}
      >
        {props.children}
      </button>
    </React.StrictMode>
  );
}

export default Button;
