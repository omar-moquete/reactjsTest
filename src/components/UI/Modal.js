import React from "react";
import styles from "./Modal.module.scss";
import Card from "./Card";

function Modal(props) {
  const overlayHandler = function (e) {
    props.setIsModalVisible(false);
    console.log(props.isModalVisible);
  };

  // event handler not working on overlay
  return (
    <div
      className={`${styles.overlay} ${
        props.isModalVisible ? "" : styles.invisible
      }`}
      onClick={overlayHandler}
    >
      <Card className={styles.content} onClick={overlayHandler}>
        <h3 className={styles.message}>{props.message}</h3>
      </Card>
    </div>
  );
}

export default Modal;
