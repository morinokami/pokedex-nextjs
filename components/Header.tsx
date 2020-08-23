import React from 'react'
import styles from '../styles/Navbar.module.scss'

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header} data-testid="header">
      <p className={styles.title}>Pokedex</p>
    </header>
  )
}

export default Header
