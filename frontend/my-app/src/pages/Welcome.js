import React from "react";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Welcome = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h2>Bienvenue, {name}</h2>
      <button onClick="addArticle()" className="addArticle">
        +
      </button>
      <Cards />
    </div>
  );
};

export default Welcome;
