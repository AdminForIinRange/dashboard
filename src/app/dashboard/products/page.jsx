import Search from "@/app/ui/dashboard/search/search";
import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Image from "next/image";
import noProduct from "@/app/public/noproduct.jpg";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const ProductsPage = () => {
  // a chldiren element within dashbaord app route
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"Search..."} />
        <Link href="/dashboard/products/add">
          {" "}
          <button className={styles.addButton}>Add New </button>{" "}
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
          <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        
            <tr >
              <td>
                <div className={styles.product}>
                  <Image
                    src={noProduct}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  w
                </div>
              </td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id"  />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
    
        </tbody>
        </table>
        <Pagination  />
    </div>
  );
};

export default ProductsPage;
