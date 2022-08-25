import styles from './Checkout.module.css'
import { XCircle } from 'phosphor-react'

export function Checkout() {
  return (
    <section>
      <header>
        <nav className={styles.navigation}>
          <a className={styles.logo} href="#home">
            <img
              id="dark-logo"
              src="./src/assets/logo-dark.png"
              alt="logo da Imã Fashion"
            />
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.order}>
          <h2>Seu pedido</h2>
          <div className={styles.cards}>
            <span className={styles.card}>
              <div className={styles.photo}>
                <i>
                  <XCircle />
                </i>

                <img
                  className={styles.productImage}
                  src="./src/assets/conjunto-branco-alfaiataria.jpg"
                  alt="conjunto"
                />
              </div>

              <div className={styles.text}>
                <p>
                  <strong>Conjunto Branco Alfaiataria</strong>
                </p>
                <p>Tamanho: M</p>
                <p>Preço: R$ 219,00</p>
                <p>Quantidade: 1</p>
                <p>Total: R$ 219,00</p>
              </div>
            </span>

            <span className={styles.card}>
              <div className={styles.photo}>
                <i>
                  <XCircle />
                </i>

                <img
                  className={styles.productImage}
                  src="./src/assets/conjunto-branco-alfaiataria.jpg"
                  alt="conjunto"
                />
              </div>

              <div className={styles.text}>
                <p>
                  <strong>Conjunto Branco Alfaiataria</strong>
                </p>
                <p>Tamanho: M</p>
                <p>Preço: R$ 219,00</p>
                <p>Quantidade: 1</p>
                <p>Total: R$ 219,00</p>
              </div>
            </span>
          </div>
        </section>

        <section className={styles.infos}>
          <div className={styles.you}>
            <h2>Você</h2>
            <div className={styles.email}>
              <input type="text" placeholder="dev.fashion@gmail.com" />
              <a href="../login/index.html">trocar de conta</a>
            </div>
          </div>

          <div className={styles.destino}>
            <h2>Destino</h2>
            <div className={styles.endereco}>
              <p>Rua t-44, n. 174</p>
              <p>Bueno, Goiânia-GO</p>
              <p>74210-150</p>
            </div>
          </div>

          <div className={styles.delivey}>
            <h2>Forma de envio</h2>
            <div className={styles.types}>
              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Retirada no local</p>
                  </span>

                  <p>Grátis</p>
                </label>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Motoboy</p>
                    <p>Previsão: até 24 horas após a confirmação</p>
                  </span>
                  <p>R$ 9,00</p>
                </label>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>PAC</p>
                    <p>Previsão: 14 dias úteis</p>
                  </span>
                  <p>R$ 27,50</p>
                </label>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Frete-grátis</p>
                    <p></p>
                  </span>
                  <p>Grátis</p>
                </label>
                <p className={styles.prazoEntrega}></p>
                <p className={styles.preçoFrete}></p>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Retirar próximo ao meu endereço</p>
                    <p>Previsão: 4 dias úteis</p>
                  </span>
                  <p>R$ 14,80</p>
                </label>
                <p className={styles.prazoEntrega}></p>
                <p className={styles.preçoFrete}></p>
              </form>

              <form className={styles.type}>
                <input type="radio" className={styles.checkbox} />
                <label>
                  <span>
                    <p>Package</p>
                    <p>Previsão: 14 dias úteis</p>
                  </span>
                  <p>R$ 29,50</p>
                </label>
                <p className={styles.prazoEntrega}></p>
                <p className={styles.preçoFrete}></p>
              </form>
            </div>
          </div>
        </section>

        <section className={styles.resumeBox}>
          <div className={styles.resume}>
            <h2>Resumo</h2>
            <span>
              <p>Sub-total</p>
              <p>R$ 438,00</p>
            </span>
            <span>
              <p>PAC</p>
              <p>R$ 27,50</p>
            </span>
            <div className={styles.total}>
              <h2>TOTAL DO PEDIDO</h2>
              <span>
                <h3>R$ 438,00</h3>
                <p>ou em até 3x de R$50,00 sem juros</p>
              </span>
            </div>
          </div>

          <div className={styles.payment}>
            <form className={styles.type}>
              <input type="radio" className={styles.checkbox} />
              <label>
                <span>
                  <p>Boleto</p>
                </span>

                <p>à vista</p>
              </label>
            </form>

            <form className={styles.type}>
              <input type="radio" className={styles.checkbox} />
              <label>
                <span>
                  <p>Cartão de crédito</p>
                </span>

                <p>em até 6 x sem juros</p>
              </label>
            </form>

            <form className={styles.type}>
              <input type="radio" className={styles.checkbox} />
              <label>
                <span>
                  <p>PIX</p>
                </span>

                <p>à vista</p>
              </label>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="/">Voltar para o site</a>
        <a className={styles.endShopping} href="#">
          Finalizar compra
        </a>
      </footer>
    </section>
  )
}
