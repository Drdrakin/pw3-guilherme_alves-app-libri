import styles from './NavBar.module.css'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
          <ul className={styles.list}>
            <Link className={styles.item} to="/">
              <li ><img className={styles.navIcon} src="book.png"></img></li>
            </Link>
            <Link className={styles.item} to="/">
              <li >HOME</li>
            </Link>
            <Link className={styles.item} to="createBook">
              <li >CADASTRAR LIVRO</li>
            </Link>
            <Link className={styles.item} to="listBook">
              <li >LISTAR LIVRO</li>
            </Link>
          </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default NavBar;