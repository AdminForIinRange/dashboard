import React from "react";
import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css"
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <div  className={styles.main} > 
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <div className={styles.side}>
        <Rightbar />
      </div>
      
       </div>
    </div>
  );
};

export default Dashboard;
