import React from "react";
import ColunaA from "./ColunaA";
import ColunaB from "./ColunaB";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import "./Wrapper.css";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <ColunaA />
      <ColunaB />
    </div>
  );
};

export default Wrapper;
