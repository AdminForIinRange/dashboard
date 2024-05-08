"use client";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({count}) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = Number(searchParams.get("page")) || 1;



  const prams = new URLSearchParams(searchParams);
  const  ITEM_PER_PAGE = 2

  const hasPrev =  ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext =  ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  return (
    <div className={styles.container}>
      <button  className={styles.button} disabled={!hasPrev}>
        Previous
      </button>
      <button className={styles.button} disabled={!hasNext}>Next</button>
    </div>
  );
};

export default Pagination;
