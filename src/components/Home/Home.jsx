import { WhatsappLogo } from 'phosphor-react'
import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.content}>
            <h2>BOAS-VINDAS A IMÃ FASHION</h2>
            <p>
              Desejamos que você tenha uma experiência incrível e encantadora na
              nossa loja Online!
            </p>
            <a className={styles.button}>
              <WhatsappLogo />
              Fale com um dos nosso atendentes!
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>Frete</h3>
            <p>Frete Off para compras acima de R$200</p>
          </div>

          <div className={styles.stat}>
            <h3>Parcelamento</h3>
            <p>Parcelamos em até 6x sem juros</p>
          </div>

          <div className={styles.stat}>
            <h3>Loja Segura</h3>
            <p>Loja segura para suas compras e dados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
