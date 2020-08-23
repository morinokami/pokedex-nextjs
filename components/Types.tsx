import React from 'react'
import styles from '../styles/Types.module.scss'

const Types: React.FunctionComponent<{ types: string[] }> = ({ types }) => {
  return (
    <ul className={styles.list}>
      {types.map((t, idx) => (
        <li key={idx} style={{ backgroundColor: getTypeColor(t) }}>
          {t}
        </li>
      ))}
    </ul>
  )
}

export default Types

const getTypeColor = (type: string) => {
  let color: string
  switch (type) {
    case 'fighting':
      color = '#9f422a'
      break
    case 'flying':
      color = '#90b1c5'
      break
    case 'poison':
      color = '#642785'
      break
    case 'ground':
      color = '#ad7235'
      break
    case 'rock':
      color = '#4b190e'
      break
    case 'bug':
      color = '#179a55'
      break
    case 'ghost':
      color = '#363069'
      break
    case 'steel':
      color = '#5c756d'
      break
    case 'fire':
      color = '#b22328'
      break
    case 'water':
      color = '#2648dc'
      break
    case 'grass':
      color = '#007c42'
      break
    case 'electric':
      color = '#e0e64b'
      break
    case 'psychic':
      color = '#ac296b'
      break
    case 'ice':
      color = '#7ecff2'
      break
    case 'dragon':
      color = '#378a94'
      break
    case 'fairy':
      color = '#9e1a44'
      break
    case 'dark':
      color = '#040706'
      break
    default:
      color = '#b1a5a5'
      break
  }
  return color
}
