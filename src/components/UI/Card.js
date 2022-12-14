import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={`${props.className} ${styles.card}`}>{props.children}</div>
  );
}

export default Card;
