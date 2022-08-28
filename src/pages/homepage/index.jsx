import React from "react";
import Navbar from "../../componnets/navbar";
import "./homepage.scss";
import burger from "../../assets/burger.png";
const Homrpage = () => {
  return (
    <div className="container">
      <Navbar />!
      <img className="burger" src={burger} alt="burger" />
    </div>
  );
};

export default Homrpage;
