import React from 'react'
import styles from './Produto.module.css'
import { Link } from 'react-router-dom'

export default function Produto(props) {
  const produto = props.produto
  return (
    <div className={styles.produto}>
      <img className={styles.imagemproduto} src={produto.img} />
      <div>
        <h3 className={styles.tittle}>{produto.productName}</h3>

        <p className={styles.productprice}>
          <span>{produto.productPrice}</span>
        </p>

        <div>
          <i></i>
          <p className={styles.productdivision}>{produto.productDivision}</p>
        </div>
        <div>
          <p>Tamanho</p>
        </div>
        <div>
          <button>
            <Link to={`/checkout`}>Adicionar ao carrinho</Link>
          </button>
          <button>
            <Link to={`/`}>Voltar</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
