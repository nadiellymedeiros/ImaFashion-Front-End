import styles from "./ShoppingCart.module.css";
import Product from "./Product";
import { useState } from "react";
import data from "./data";

export function ShoppingCart() {
  const [products, setProducts] = useState(data.addedProducts); // puxa os dados do data.js

  const totalPrice = products.reduce(
    //consolida o Subtotal
    (acumulator, product) => acumulator + product.price * product.qty,
    0
  );

  const onAdd = (product) => {
    // para aumentar a quantidade de um produto
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...product, qty: product.qty + 1 } : p
      )
    );
  };

  const onRemove = (product) => {
    //para diminuir
    if (product.qty !== 1) {
      setProducts(
        products.map((p) =>
          p.id === product.id ? { ...product, qty: product.qty - 1 } : p
        )
      );
    }
  };

  const onRemoveAll = (product) => {
    //remover o produto
    setProducts(products.filter((p) => p.id !== product.id));
  };

  return (
    <section className={styles.scMenu}>
      <div className={styles.totalLabel}>
        <h1 className={styles.title}>Carrinho</h1>
        <h1 className={styles.totalValue}> ({products.length}) </h1>
      </div>

      <div className={styles.products}>
        {" "}
        {/*para cada item do array Products é criado um componente Product*/}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              onAdd={onAdd}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            ></Product>
          );
        })}
      </div>

      <div className={styles.subtotal}>
        <div className={styles.sumaryLabel}>Subtotal: </div>
        <p>R$ </p>
        <div className={styles.sumaryValue}>{totalPrice}</div>
      </div>

      <div className={styles.buttonFinish}>
        <a
          className={styles.finish}
          onClick={() => alert("cenas para o próximo capítulo")}
        >
          FINALIZAR COMPRA
        </a>
      </div>

      <a
        className={styles.moreProducts}
        onClick={() => alert("cenas para o próximo capítulo")}
      >
        Ver mais produtos
      </a>
    </section>
  );
}
