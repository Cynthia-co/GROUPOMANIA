import React from "react";
import Logo from "../components/Logo";

import Signin from "../components/Signin";
import Connexion from "../components/Connexion";
import Cards from "../components/Cards";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div>
      <Logo />
      <h1>Bienvenue sur Groupomania, votre réseau social d'entreprise</h1>
      <Signin />
      <Connexion />
      <Cards />
      <Menu />
    </div>
  );
};

export default Home;
