import styles from './NavBar.module.css'
import React from 'react'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
        <ul className={styles.list}>
            <li className={styles.item}><img className={styles.navIcon} src=".\book.png"></img></li>
            <li className={styles.item}>HOME</li>
            <li className={styles.item}>CADASTRAR LIVRO</li>
            <li className={styles.item}>LISTAR LIVRO</li>
        </ul>
    </nav>
  )
}

export default NavBar;