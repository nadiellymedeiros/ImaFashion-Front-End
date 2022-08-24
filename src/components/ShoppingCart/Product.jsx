import { Trash, MinusCircle, PlusCircle } from "phosphor-react";
import styles from "./Product.module.css";
import ImageProduct from "./ImageProduct";

export default function Product(props) {
  //armazena as propriedades do componente Product
  const { product, onAdd, onRemove, onRemoveAll } = props;

  return (
    <div className={styles.product}>
      <div className={styles.productPhotoBox}>
        <ImageProduct src={product.image}></ImageProduct>
        <button
          onClick={() => onRemoveAll(product)}
          className={styles.buttonRemoveItem}
        >
          <i className={styles.phTrash}>
            <Trash />
          </i>
          <p className={styles.removeProduct}>Remover produto</p>
        </button>
      </div>

      <div className={styles.descrition}>
        <h1 className={styles.titlePhoto}>{product.name}</h1>
        <p className={styles.price}>R$ {product.price.toFixed(2)}</p>

        <div className={styles.size}></div>

        <div className={styles.amount}>
          <h4>Quantidade: </h4>
          <span className={styles.plusOrMinus}>
            <button
              onClick={() => onRemove(product)}
              className={styles.buttonMinus}
            >
              <i className={styles.phMinusCircle}>
                <MinusCircle size={32} />
              </i>
            </button>

            <p className={styles.spaceQuantity}>{product.qty}</p>
            <button
              onClick={() => onAdd(product)}
              className={styles.buttonPlus}
            >
              <i className={styles.phPlusCircle}>
                <PlusCircle size={32} />
              </i>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
