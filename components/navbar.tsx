import React from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar: React.FunctionComponent = () => {
  return (
    <header className={styles.navbar} data-testid="navbar">
      <p className={styles.title}>Pokedex</p>
    </header>
  )
}

export default Navbar
