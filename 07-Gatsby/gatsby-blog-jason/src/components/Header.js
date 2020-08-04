import React from "react"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <>
      <header>
        <h5 className={styles.title}>
          <Link to="/" className={styles.title}>
            Aadarsh'x
          </Link>
        </h5>

        <nav>
          <ul className={styles.navList}>
            <li>
              <Link
                to="/"
                className={styles.navItem}
                activeClassName={styles.currentPage}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about/"
                className={styles.navItem}
                activeClassName={styles.currentPage}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/blog/"
                className={styles.navItem}
                activeClassName={styles.currentPage}
              >
                Blogs
              </Link>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
