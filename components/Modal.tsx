import React from 'react'
import Rodal from 'rodal'
import Detail from './Detail'
import { Pokemon } from '../lib/pokemons'

const Modal: React.FunctionComponent<{
  open: boolean
  setOpen: (open: boolean) => void
  pokemon: Pokemon
  setPokemon: (pokemon: Pokemon) => void
  color: string
}> = ({ open, setOpen, pokemon, setPokemon, color }) => {
  return (
    <Rodal
      visible={open}
      animation="slideUp"
      duration={500}
      customStyles={{
        backgroundColor: '#2b292b',
        padding: 0,
        width: '100%',
        maxWidth: 480,
        height: '100%',
        maxHeight: 960,
        overflow: 'hidden',
      }}
      onClose={() => {
        setOpen(false)
        setPokemon(null)
      }}
    >
      {pokemon ? <Detail pokemon={pokemon} color={color} /> : null}
    </Rodal>
  )
}

export default Modal
