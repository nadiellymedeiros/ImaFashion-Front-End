import { Trash, MinusCircle, PlusCircle } from 'phosphor-react'
import styles from './Product.module.css'
import ImageProduct from './ImageProduct'

export default function Product({
  onIncrease,
  onDecrease,
  onRemove,
  index,
  id,
  image,
  name,
  price,
  qty,
  size
}) {
  return (
    <div className={styles.product}>
      <div className={styles.productPhotoBox}>
        <ImageProduct src={image}></ImageProduct>
        <button
          className={styles.buttonRemoveItem}
          onClick={() => onRemove(index)}
        >
          <i className={styles.phTrash}>
            <Trash />
          </i>
          <p className={styles.removeProduct}>Remover produto</p>
        </button>
      </div>

      <div className={styles.descrition}>
        <p className={styles.titlePhoto}>{name}</p>
        <p className={styles.price}>R$ {price},00</p>

        <p className={styles.size}>Tamanho: {size}</p>

        <div className={styles.amount}>
          <p>Quantidade: </p>
          <span className={styles.plusOrMinus}>
            <button
              className={styles.buttonMinus}
              onClick={() => onDecrease(id, size)}
            >
              <i className={styles.phMinusCircle}>
                <MinusCircle size={32} />
              </i>
            </button>

            <p className={styles.spaceQuantity}>{qty}</p>
            <button
              className={styles.buttonPlus}
              onClick={() => onIncrease(id, size)}
            >
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
