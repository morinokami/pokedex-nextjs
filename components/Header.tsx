import React from 'react'
import styles from '../styles/Header.module.scss'

const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header} data-testid="header">
      <p className={styles.title}>Pokedex</p>
    </header>
  )
}

export default Header
