import React, { useRef, useState } from 'react'
import styles from '../styles/Card.module.scss'
import { Pokemon } from '../lib/pokemons'
import 'intersection-observer'
import { useIsVisible } from 'react-is-visible'
import ColorThief from 'colorthief'
import Rodal from 'rodal'
import PokemonModal from './PokemonModal'

const Card: React.FunctionComponent<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref, { once: true })
  const imgRef = useRef(null)
  const [color, setColor] = useState<string>()
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <div
        className={styles.card}
        ref={ref}
        onClick={() => setShowModal(true)}
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
                setColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
                ref.current.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
              }
            }}
          />
        ) : null}
        <p data-testid="pokemon-name">{pokemon.name}</p>
      </div>
      <Rodal
        visible={showModal}
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
        onClose={() => setShowModal(false)}
      >
        <PokemonModal pokemon={pokemon} color={color} />
      </Rodal>
    </>
  )
}

export default Card
