"use client";

import React from "react";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
const Search = ({ placeholder }) => {
  const SearchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

const parmas = new URLSearchParams(SearchParams);

replace(`${pathname}?${parmas}`)

  console.log(pathname);
  console.log(SearchParams);
  console.log(parmas);
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
