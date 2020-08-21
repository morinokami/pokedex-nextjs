import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  PokemonInfo,
  getAllPokemonNames,
  getPokemonInfo,
} from '../lib/pokemons'
import Container from '../components/container'

const Pokemon: React.FunctionComponent<{ pokemon: PokemonInfo }> = ({
  pokemon,
}) => {
  return (
    <Container title={`Pokedex - ${pokemon.name}`}>{pokemon.name}</Container>
  )
}

export default Pokemon

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPokemonNames()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemon = await getPokemonInfo(params.name as string)
  return {
    props: {
      pokemon,
    },
  }
}
