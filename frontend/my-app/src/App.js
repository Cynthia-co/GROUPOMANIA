import React from "react";
import "./App.css";
import "../src/pages/Home";

// import { Routes, Route } from "react-router-dom";

import Profile from "./components/Profile";

import Logoinline from "./components/Logoinline";
import Navbarpage from "./components/Navbarpage";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="App">
      <div>
        <Logoinline />
        <Navbarpage />
      </div>
      <h2>Bienvenue, </h2>
      <button className="addArticle">+</button>
      <Cards />
      {/*  <Routes>       
          <Route path="/" component={Home} />
          <Route path="/welcome" component={<Welcome/> } />
          <Route path="/connect" element={Connexion}/>
          <Route path="/signin" element={Inscription}/>
          <Route path="/profile/:id" element={Profile} />
          <Redirect to="/" />
        </Routes> */}
    </div>
  );
};

export default App;
