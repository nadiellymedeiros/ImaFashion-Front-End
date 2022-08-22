import styles from './Busca.module.css'  
import {MagnifyingGlass} from 'phosphor-react'

export function Busca () {  
    return (
      <form action=" " method="post">
        <label className={styles.label}></label>
        <input className={styles.input} type="search" placeholder="O que você procura hoje?" id="busca" name="q" />
        <button className={styles.button} type="submit">
          <div className={styles.icone}>
            <MagnifyingGlass size={26} />
          </div>
        </button>
      </form>
)
}
