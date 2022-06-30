import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Logoinline from "../components/Logoinline";

const Welcome = () => {
  return (
    <div>
      <Logoinline />
      <h2>Bienvenue, </h2>
      <button  className="addArticle">
        +
      </button>
      
    </div>
  );
};

export default Welcome;
