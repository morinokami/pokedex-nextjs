import React, { useRef, useState, useCallback } from 'react'
import styles from '../styles/Card.module.scss'
import { Pokemon, getPokemonImageURL } from '../lib/pokemons'
import 'intersection-observer'
import { useIsVisible } from 'react-is-visible'
import ColorThief from 'colorthief'

const Card: React.FunctionComponent<{
  pokemon: Pokemon
  setPokemon: (pokemon: Pokemon) => void
  setOpenModal: (open: boolean) => void
  setColor: (color: string) => void
}> = ({ pokemon, setPokemon, setOpenModal, setColor }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref, { once: true })
  const imgRef = useRef<HTMLImageElement>(null)

  const [width, setWidth] = useState(0)
  const pRef = useCallback((node) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width)
    }
  }, [])

  const src = getPokemonImageURL(pokemon.id)

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
        <div style={{ height: `${width}px` }}>
          {isVisible ? (
            <img
              className={styles.image}
              src={src}
              alt={pokemon.name}
              ref={imgRef}
              onLoad={() => {
                if (imgRef.current) {
                  const colorThief = new ColorThief()
                  const color = colorThief.getColor(imgRef.current)
                  ref.current.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                }
              }}
            />
          ) : null}
        </div>
        <p data-testid="pokemon-name" ref={pRef}>
          {pokemon.name}
        </p>
      </div>
    </>
  )
}

export default Card
