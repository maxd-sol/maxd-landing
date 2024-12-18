import styles from './about.module.scss'

export const About = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Why $MAXD</h4>
      <ol className={styles.list}>
        <li>Fully driven by a passionate degen community</li>
        <li>Good techincal stats: no rug, a lot of holders, and stuff</li>
        <li>Upcoming $MAXD based FOSS projects</li>
        <li>Literally you</li>
      </ol>
    </div>
  )
}
