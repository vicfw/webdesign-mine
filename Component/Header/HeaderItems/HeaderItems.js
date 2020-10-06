import React from "react";
import classes from "./HeaderItems.module.css";

function HeaderItems(props) {
  return (
    <React.StrictMode>
      <li className={classes.list}>
        <a className={classes.listLink} href="/">
          {props.children}
        </a>
      </li>
    </React.StrictMode>
  );
}

export default HeaderItems;
