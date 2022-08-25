import styles from './Produtos.module.css'
import { Link } from 'react-router-dom'

export default function Produtos(props) {
  const produtos = props.produtos
  return (
    <section id="produtos" className={styles.shopsection}>
      {produtos.map(produto => {
        return (
          <div key={produto.id}>
            <div className={styles.carditem}>
            <Link to={`/productPage/${produto.id}`}>
              <img src={produto.img} />
              <div>
                <h3>{produto.productName}</h3>
                <p>
                  <span>{produto.productPrice}</span>
                </p>
                <p>
                  <span>{produto.productDivision}</span>
                </p>
                <p>
                  <button className={styles.addproductbtn}>
                    Ver Produto
                  </button>
                </p>
              </div>
              </Link>
            </div>
          </div>
        )
      })}
    </section>
  )
}
