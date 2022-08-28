import React, { useEffect } from 'react'
import styles from './Produto.module.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext/cartContext'

export default function Produto(id) {
  const [ size, setSize ] = useState("")
  const { estoque, handleAddItemToCart } = useContext(CartContext)

  const handleProductId = estoque?.filter(product => product.id === id.id)

  function handleValidateItemToAddToCart(){
    if (size !== "") {
      handleAddItemToCart(
        handleProductId[0].id,
        handleProductId[0].img,
        handleProductId[0].productName,
        handleProductId[0].productPrice,
        1,
        size
      )
    } else {
      alert("Selecione um tamanho, por gentileza!")
    } 
  }

  return (
    <div className={styles.produto}>
      <div>
        <img className={styles.imagemproduto} src={handleProductId[0].img} />
        <div>
          <h3 className={styles.tittle}>{handleProductId[0].productName}</h3>

          <p className={styles.productprice}>
            <span>{handleProductId[0].productPrice}</span>
          </p>

          <div>
            <i></i>
            <p className={styles.productdivision}>
              {handleProductId[0].productDivision}
            </p>
          </div>
          <div>
            <h1>Tamanho - {size}</h1>
            <button className={styles.tochekout} onClick={()=>setSize("P")} >P</button>
            <button className={styles.tochekout} onClick={()=>setSize("M")} >M</button>
            <button className={styles.tochekout} onClick={()=>setSize("G")} >G</button>
          </div>
          <div>
            <button
              className={styles.tochekout}
              onClick={() => handleValidateItemToAddToCart()}
            >
              Adicionar ao carrinho
            </button>
            <button className={styles.tohome}>
              <Link to={`/`}>Voltar</Link>
            </button>
          </div>
        </div>
      </div>
      )
    </div>
  )
}
