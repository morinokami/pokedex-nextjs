import React, { useRef, useState, useEffect } from 'react'
import {
  Pokemon,
  PokemonInfo,
  getPokemonInfo,
  getPokemonImageURL,
} from '../lib/pokemons'
import { useIsVisible } from 'react-is-visible'
import styles from '../styles/Detail.module.scss'
import Types from '../components/Types'
import WHeight from '../components/WHeight'
import Stats from '../components/Stats'

const PokemonModal: React.FunctionComponent<{
  pokemon: Pokemon
  color: string
}> = ({ pokemon, color }) => {
  const ref = useRef(null)
  const isVisible = useIsVisible(ref)
  const [info, setInfo] = useState<PokemonInfo>(null)

  useEffect(() => {
    if (isVisible) {
      getPokemonInfo(pokemon.name).then((info) => setInfo(info))
    }
  }, [isVisible, pokemon.name])

  const src = getPokemonImageURL(pokemon.id)

  return (
    <div ref={ref}>
      <div className={styles.imageContainer} style={{ backgroundColor: color }}>
        {isVisible ? <img src={src} /> : null}
      </div>
      <div className={styles.info}>
        <h2>{pokemon.name}</h2>
        {info && isVisible ? (
          <>
            <Types types={info.types} />
            <div className={styles.wheight}>
              <WHeight value={info.weight} weight={true} />
              <WHeight value={info.height} weight={false} />
            </div>
            <Stats stats={info.stats} />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default PokemonModal
