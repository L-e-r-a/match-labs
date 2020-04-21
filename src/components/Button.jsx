import React from "react";
import styles from "./Button.module.css";

const Button = ({size, variant, children}) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>{children}</button>
  );
};

export default Button;
