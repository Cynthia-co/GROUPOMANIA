import React from "react";
import Logo from "../components/Logo";

import Signin from "../components/Signin";

import Cards from "../components/Cards";
import Menu from "../components/Menu";
import Connect from "../components/Connect";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Logo />
      <h1>Bienvenue sur Groupomania, votre réseau social d'entreprise</h1>
      <Navbar/>
      <Signin />
      <Connect />
      <Cards />
      <Menu />
    </div>
  );
};

export default Home;
