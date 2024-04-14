import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>sdfsdfswfd</span>
        <span className={styles.number}>12.33</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
