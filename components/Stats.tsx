import React, { useState, useEffect } from 'react'
import styles from '../styles/Stats.module.scss'

const Stats: React.FunctionComponent<{
  stats: { name: string; value: number }[]
}> = ({ stats }) => {
  return (
    <>
      <div className={styles.title}>Base Stats</div>
      {stats.map((s) => (
        <ProgressBar
          name={s.name}
          percent={(s.value / 300.0) * 100}
          key={s.name}
        />
      ))}
    </>
  )
}

export default Stats

const ProgressBar: React.FunctionComponent<{
  name: string
  percent: number
}> = ({ name, percent }) => {
  const [value, setValue] = useState<number>(0)
  console.log(name, value)

  useEffect(() => {
    setValue(percent)
  }, [percent])

  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{convertName(name)}</div>
      <div className={styles.progress} style={{ width: '100%' }}>
        <div
          className={styles.bar}
          style={{
            width: `${value}%`,
            backgroundColor: getBarColor(name),
          }}
        />
      </div>
    </div>
  )
}

const convertName = (name: string) => {
  let converted: string
  switch (name) {
    case 'hp':
      converted = 'HP'
      break
    case 'attack':
      converted = 'ATK'
      break
    case 'defense':
      converted = 'DEF'
      break
    case 'speed':
      converted = 'SPD'
      break
    case 'base_experience':
      converted = 'EXP'
      break
    default:
      break
  }
  return converted
}

const getBarColor = (name: string) => {
  let color: string
  switch (name) {
    case 'hp':
      color = '#d53a47'
      break
    case 'attack':
      color = '#ffa726'
      break
    case 'defense':
      color = '#0091ea'
      break
    case 'speed':
      color = '#90b1c5'
      break
    default:
      color = '#388e3c'
      break
  }
  return color
}
