import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, ...restProps }) => {
  return (
    <button {...restProps} className={styles.button}>
      {children}
    </button>
  );
};
