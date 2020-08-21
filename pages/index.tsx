import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.scss'
import { Pokemon, getPokemons } from '../lib/pokemons'
import Card from '../components/card'

const Home: React.FunctionComponent<{ pokemons: Pokemon[] }> = ({
  pokemons,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex - Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {pokemons.map((p) => (
            <Card pokemon={p} key={p.id} />
          ))}
        </div>
      </main>
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
