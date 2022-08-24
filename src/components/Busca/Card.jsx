import styles from './Card.module.css'

import { CreditCard } from 'phosphor-react'

export function Card({
  productImg,
  productName,
  productPrice,
  productDivision
}) {
  return (
    <div className={styles.product}>
      <img src={productImg} className={styles.item} />
      <div className={styles.description}>
        <p className={styles.titlePhoto}>{productName}</p>

        <p className={styles.price}>{productPrice}</p>
        <div className={styles.creditcard}>
          <CreditCard size={18} />
          <p className={styles.parcela}>{productDivision}</p>
        </div>
      </div>
    </div>
  )
}
