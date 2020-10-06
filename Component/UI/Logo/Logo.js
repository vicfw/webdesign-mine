import React from "react";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <img src="/images/logo.png" alt="logo" />
    </div>
  );
}

export default Logo;
