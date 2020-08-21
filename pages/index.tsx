import React from 'react'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.scss'
import { Pokemon, getPokemons } from '../lib/pokemons'
import Container from '../components/container'
import Card from '../components/card'

const Home: React.FunctionComponent<{ pokemons: Pokemon[] }> = ({
  pokemons,
}) => {
  return (
    <Container title="Pokedex - Next.js">
      <div className={styles.grid}>
        {pokemons.map((p) => (
          <Card pokemon={p} key={p.id} />
        ))}
      </div>
    </Container>
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
