import React from "react";
import { useParams } from "react-router-dom";
import Produto from "../components/Produto/Produto";
import Produtos from "../components/Produtos/Produtos";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <Produto id={id} />
      <div className="HomePage">
        <Produtos id={id} />
      </div>
    </div>
  );
}
