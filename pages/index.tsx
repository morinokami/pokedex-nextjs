import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.scss'
import { Pokemon, getPokemons } from '../lib/pokemons'
import Container from '../components/Container'
import Card from '../components/Card'
import Modal from '../components/Modal'

const Home: React.FunctionComponent<{ pokemons: Pokemon[] }> = ({
  pokemons,
}) => {
  const [pokemon, setPokemon] = useState<Pokemon>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [color, setColor] = useState<string>()

  return (
    <Container title="Pokedex - Next.js">
      <div className={styles.grid}>
        {pokemons.map((p) => (
          <Card
            pokemon={p}
            setPokemon={setPokemon}
            setOpenModal={setOpenModal}
            setColor={setColor}
            key={p.id}
          />
        ))}
      </div>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        pokemon={pokemon}
        setPokemon={setPokemon}
        color={color}
      />
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
