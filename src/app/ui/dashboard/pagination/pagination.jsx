"use client";
import React from 'react'
import styles from "./pagination.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = () => {
  return (
    <div className={styles.container}>
    <button
    disabled
      className={styles.button}

    >
      Previous
    </button>
    <button
      className={styles.button}

    >
      Next
    </button>
  </div>
  )
}

export default Pagination