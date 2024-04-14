"use client";
import Link from "next/link";
import React from "react";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ title, path, icon }) => {
  const pathname = usePathname(); // use Client

  return (
    <Link
      className={` ${styles.container} ${pathname === path && "active"}`}
      href={path}
    >
      {" "}
      {icon} {title}{" "}
    </Link>
  );
};

export default MenuLink;
