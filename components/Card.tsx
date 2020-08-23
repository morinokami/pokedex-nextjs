import React, { useRef } from 'react'
import styles from '../styles/Card.module.scss'
import { Pokemon } from '../lib/pokemons'
import 'intersection-observer'
import { useIsVisible } from 'react-is-visible'
import ColorThief from 'colorthief'

const Card: React.FunctionComponent<{
  pokemon: Pokemon
  setPokemon: (pokemon: Pokemon) => void
  setOpenModal: (open: boolean) => void
  setColor: (color: string) => void
}> = ({ pokemon, setPokemon, setOpenModal, setColor }) => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref, { once: true })
  const imgRef = useRef(null)

  return (
    <>
      <div
        className={styles.card}
        ref={ref}
        onClick={() => {
          setPokemon(pokemon)
          setOpenModal(true)
          if (imgRef.current) {
            const colorThief = new ColorThief()
            const color = colorThief.getColor(imgRef.current)
            setColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
          }
        }}
        data-testid="card"
      >
        {isVisible ? (
          <img
            className={styles.image}
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            ref={imgRef}
            crossOrigin="anonymous"
            onLoad={() => {
              if (imgRef.current) {
                const colorThief = new ColorThief()
                const color = colorThief.getColor(imgRef.current)
                ref.current.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
              }
            }}
          />
        ) : null}
        <p data-testid="pokemon-name">{pokemon.name}</p>
      </div>
    </>
  )
}

export default Card
