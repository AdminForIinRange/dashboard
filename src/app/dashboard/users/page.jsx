import Search from "@/app/ui/dashboard/search/search";
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import noAvater from "@/app/public/noavatar.png";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";
const UsersPage = async ({ searchParams }) => {
  // searchParams is a buitin propagateServerField, like prams

  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { users, count } = await fetchUsers(q, page);

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || noAvater}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                     {/* He fetches all the users and maps them. Then, he creates an <a> tag with the id of each user (from the fetch remember). This id is set as a URL parameter. So, when users click it, they get sent to the dynamic slug, called id (it can be named anything). When they arrive there, he just grabs the last section of the URL as a parameter and uses that to apply changes or create new users because he is an admin. */}
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
