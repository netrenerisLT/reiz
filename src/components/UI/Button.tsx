import React from "react";
import classes from "./Button.module.css";

function Button(props: any) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
