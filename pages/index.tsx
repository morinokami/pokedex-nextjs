import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex - Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>hey</main>
    </div>
  )
}

export default Home
