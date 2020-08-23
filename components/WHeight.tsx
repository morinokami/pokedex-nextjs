import React from 'react'
import styles from '../styles/WHeight.module.scss'

const WHeight: React.FunctionComponent<{ value: number; weight: boolean }> = ({
  value,
  weight,
}) => {
  const unit = weight ? 'KG' : 'M'
  const desc = weight ? 'Weight' : 'Height'
  return (
    <div className={styles.container}>
      <div className={styles.value}>{`${(value / 10).toFixed(1)} ${unit}`}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  )
}

export default WHeight
