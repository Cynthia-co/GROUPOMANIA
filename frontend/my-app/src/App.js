import React from "react";
import "./App.css";
import "../src/pages/Home";
import Logo from "./components/Logo";
import Signin from "./components/Signin";
import Connexion from "./components/Connexion";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from './pages/Home';
// import Welcome from './pages/Welcome';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="/welcome" element={<Welcome />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <div className="App">
      <Logo />
      <h1>Bienvenue sur Groupomania, votre réseau social d'entreprise</h1>
      <Signin />
      <Connexion />
      <Cards />
      <Menu />
    </div>
  );
};

export default App;
