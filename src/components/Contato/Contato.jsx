import styles from './Contato.module.css'
import { WhatsappLogo } from 'phosphor-react'

export function Contato() {
  return (
    <section className={styles.contato}>
      <header className={styles.header}>
        <h2>Entre em contato com a gente!</h2>
      </header>
      <div className={styles.content}>
        <ul>
          <li>R. 136, Goiânia</li>
          <li>contato@imafashion.com</li>
        </ul>

        <button className={styles.button}>
          <WhatsappLogo />
          Fale com nossos representantes
        </button>
      </div>
    </section>
  )
}
