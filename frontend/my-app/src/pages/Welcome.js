import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";


const Welcome = () => {
  return (
    <div>
      <Header />
      
      <h2>Bienvenue, </h2>
      <button onClick="addArticle()" className="addArticle">
        +
      </button>
      <Cards />
    </div>
  );
};

export default Welcome;
