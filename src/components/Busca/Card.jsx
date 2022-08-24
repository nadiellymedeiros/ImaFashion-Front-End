import styles from './Card.module.css'

import { CreditCard, Star } from 'phosphor-react'

export function Card() {
  return (
    <div className={styles.product}>
      <img
        src="./src/assets/conjunto-branco-alfaiataria.jpg"
        className={styles.item}
      />
      <div className={styles.description}>
        <p className={styles.titlePhoto}>Vestido Floral Verão Azul</p>

        <p className={styles.price}>R$ 90,00</p>
        <div className={styles.creditcard}>
          <CreditCard size={18} />
          <p className={styles.parcela}>6 x de R$15,00</p>
        </div>
      </div>
    </div>
  )
}
