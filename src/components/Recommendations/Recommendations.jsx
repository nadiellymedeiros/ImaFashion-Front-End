import React from "react";
import { Link, useParams } from "react-router-dom";
import Produtos from "../Produtos/Produtos";
import { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext/cartContext";
import styles from "../Produtos/Produtos.module.css";
import "./Recommendations.css";
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";

export default function ProductPage(params) {
  var { estoque } = useContext(CartContext);
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (params.id) {
    const tipo = estoque.find(
      (produto) => produto.id === params.id
    ).productType;
    estoque = estoque.filter(
      (produto) => produto.productType === tipo && produto.id !== params.id
    );
  }

  return (
    <div className="recommendationContainer">
      <div className="carousel" ref={carousel}>
        {estoque?.map((produto) => {
          return (
            <div key={produto.id}>
              <div className={styles.carditem}>
                <Link to={`/productPage/${produto.id}`}>
                  <img src={produto.img} />
                  <div>
                    <h3>{produto.productName}</h3>
                    <p>
                      <span>R$ </span>
                      <span>{produto.productPrice}</span>
                      <span>,00</span>
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
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <i className={styles.caretCircLeft}>
            <CaretCircleLeft size={32} />
          </i>
        </button>
        <button onClick={handleRightClick}>
          <i className={styles.caretCircRight}>
            <CaretCircleRight size={32} />
          </i>
        </button>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className="HomePage">
  //       <Produtos id={id} />
  //     </div>
  //   </div>
  // );
}
