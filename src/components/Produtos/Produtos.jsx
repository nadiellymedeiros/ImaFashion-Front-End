import styles from './Produtos.module.css'
import { Link } from 'react-router-dom'

export default function Produtos(props) {
  const produtos = props.produtos
  return (
    <section className={styles.shopsection}>
      {produtos.map(produto => {
        return (
          <div key={produto.id}>
            <div className={styles.carditem}>
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
                    <Link to={`/productPage/${produto.id}`}>Ver Produto</Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
