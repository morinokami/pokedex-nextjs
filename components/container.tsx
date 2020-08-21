import React from 'react'
import Head from 'next/head'
import styles from '../styles/Container.module.scss'
import Navbar from './navbar'

const Container: React.FunctionComponent<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Container
