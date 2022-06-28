import React from "react";
import "./App.css";
import "../src/pages/Home";

// import { Routes, Route } from "react-router-dom";

import Profile from "./components/Profile";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Header from "./components/Header";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <div className="App">
         <Header />
         <Navbar />
         {/*  <Routes>       
          <Route path="/" component={Home} />
          <Route path="/welcome" component={<Welcome/> } />
          <Route path="/connect" element={Connexion}/>
          <Route path="/signin" element={Inscription}/>
          <Route path="/profile/:id" element={Profile} />
        </Routes> */ }
      </div>
    
  );
};

export default App;
