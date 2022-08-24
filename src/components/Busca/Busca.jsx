import styles from './Busca.module.css'
import { MagnifyingGlass } from 'phosphor-react'
import { Card } from './Card'
import { About } from '../About/About'

export function Busca() {
  return (
    <section className={styles.searchSection}>
      <form className={styles.searchForm} action=" " method="post">
        <input
          className={styles.input}
          type="search"
          placeholder="O que você procura hoje?"
          id="busca"
          name="q"
        />
        <button className={styles.button} type="submit">
          <div className={styles.icone}>
            <MagnifyingGlass size={26} />
          </div>
        </button>
      </form>
      <main>
        <Card />
      </main>
    </section>
  )
}
