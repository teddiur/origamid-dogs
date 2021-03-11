import React from "react";
import styles from "./Input.module.css";

export const Input = ({ label, type, placeholder, id }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
      <p className={styles.error}>Error</p>
    </div>
  );
};
