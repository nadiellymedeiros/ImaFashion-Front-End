import styles from './Card.module.css'
import figura1 from '../../assets/vestido-floral-verao-azul.png'
import { CreditCard, Star } from 'phosphor-react'

export function Card ({vestido}) {
    return (
    <div className={styles.product} >
            <img src= {figura1} className={styles.item} />
            <div className={styles.description} >
              <p className={styles.titlePhoto} >Vestido Floral Verão Azul</p>
              <div className={styles.star}>
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
              </div>
              <p className={styles.price} >R$ 90,00</p>
              <div className={styles.creditcard}>
              <CreditCard size={18}/>
              <p className={styles.parcela}>6 x de R$15,00</p>
              </div>
            </div>
          </div>

          )
}