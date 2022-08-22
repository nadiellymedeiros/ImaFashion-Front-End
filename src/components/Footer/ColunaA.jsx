import React from "react";
import Logo from "./Logo";
import Texto from "./Texto";
import "./ColunaA.css";

const ColunaA = () => {
  return (
    <div className="col-a">
      <Logo />
      <Texto />
    </div>
  );
};

export default ColunaA;
