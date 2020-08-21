import React, { useRef } from 'react'
import styles from '../styles/Card.module.scss'
import { Pokemon } from '../lib/pokemons'
import 'intersection-observer'
import { useIsVisible } from 'react-is-visible'
import ColorThief from 'colorthief'

const Card: React.FunctionComponent<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref, { once: true })
  const imgRef = useRef(null)

  return (
    <a className={styles.card} href={pokemon.url} key={pokemon.name} ref={ref}>
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
    </a>
  )
}

export default Card
