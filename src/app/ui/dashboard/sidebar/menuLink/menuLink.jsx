import Link from 'next/link'
import React from 'react'
import styles from "./menuLink.module.css"
const MenuLink = ({ title, path, icon}) => {
  return (

    <div className={styles.container} >
        <Link  href={path}  > {icon} {title} </Link>
    </div>
    
  )
}

export default MenuLink