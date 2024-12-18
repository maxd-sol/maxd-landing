import { useEffect, useRef } from 'react'
import { randomNumber } from '../../utils/rand'
import styles from './stars-overlay.module.scss'

const STAR_COUNT = 200

const genStarsBoxShadow = () => {
  let result = ''
  for (let i = 0; i < STAR_COUNT; i++) {
    const size = randomNumber(1, 2)
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${size}px ${size}px #fff,`
  }

  return result.slice(0, -1)
}

export const StarsOverlay = () => {
  const starsRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return
    starsRef.current.style.boxShadow = genStarsBoxShadow()
  }, [])

  return <div className={styles.stars} ref={starsRef} />
}
