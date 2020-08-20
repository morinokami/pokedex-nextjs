import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.scss'
import { Pokemon, getPokemons } from '../lib/pokemons'

const Home: React.FunctionComponent<{ pokemons: Pokemon[] }> = ({
  pokemons,
}) => {
  useEffect(() => {
    console.log(pokemons)
  })

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

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await getPokemons()
  return {
    props: {
      pokemons,
    },
  }
}
