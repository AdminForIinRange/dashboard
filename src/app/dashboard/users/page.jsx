import Search from "@/app/ui/dashboard/search/search";
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import noAvater from "@/app/public/noavatar.png";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";

const UsersPage = async () => {
  // a chldiren element within dashbaord app route
  const users = await fetchUsers(); 
  console.log(users);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search..."} />
        <Link href="/dashboard/users/add">
          {" "}
          <button className={styles.addButton}>Add New </button>{" "}
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={noAvater}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                w
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/test`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form>
                  <input type="hidden" name="id" />
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
