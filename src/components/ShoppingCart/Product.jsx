import { Trash, MinusCircle, PlusCircle } from 'phosphor-react'
import styles from './Product.module.css'
import ImageProduct from './ImageProduct'

export default function Product({ onIncrease, onDecrease, onRemove, index, id, image, name, price, qty, size }) {
  return (
    <div className={styles.product}>
      <div className={styles.productPhotoBox}>
        <ImageProduct src={image}></ImageProduct>
        <button className={styles.buttonRemoveItem} onClick={()=>onRemove(index)}>
          <i className={styles.phTrash}>
            <Trash />
          </i>
          <p className={styles.removeProduct}>Remover produto</p>
        </button>
      </div>

      <div className={styles.descrition}>
        <h1 className={styles.titlePhoto}>{name}</h1>
        <p className={styles.price}>R$ {price}</p>

        <div className={styles.size}>Tamanho: {size}</div>

        <div className={styles.amount}>
          <h4>Quantidade: </h4>
          <span className={styles.plusOrMinus}>
            <button className={styles.buttonMinus} onClick={()=>onDecrease(id, size)}>
              <i className={styles.phMinusCircle}>
                <MinusCircle size={32} />
              </i>
            </button>

            <p className={styles.spaceQuantity}>{qty}</p>
            <button className={styles.buttonPlus} onClick={()=>onIncrease(id, size)}>
              <i className={styles.phPlusCircle}>
                <PlusCircle size={32} />
              </i>
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}
