"use client"

import React from 'react'
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css"
const Navbar = () => {
    const pathname = usePathname(); 

  return (
    <div className={styles.container}>{pathname.split("/").pop}</div>
  )
}

export default Navbar