import styles from './NavBar.module.css'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
          <ul className={styles.list}>
            <Link to="/">
              <li className={styles.item}><img className={styles.navIcon} src="book.png"></img></li>
            </Link>
            <Link to="/">
              <li className={styles.item}>HOME</li>
            </Link>
            <Link to="createBook">
              <li className={styles.item}>CADASTRAR LIVRO</li>
            </Link>
            <Link to="listBook">
              <li className={styles.item}>LISTAR LIVRO</li>
            </Link>
          </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default NavBar;