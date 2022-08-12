import styles from './Stat.module.css'

export function Stat({ tittle, paragraph }) {
  return (
    <div className={styles.Stat}>
      <h3>{tittle}</h3>
      <p>{paragraph}</p>
    </div>
  )
}
