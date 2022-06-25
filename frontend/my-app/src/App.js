import React from "react";
import "./App.css";
import "../src/pages/Home";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    
      <div className="App">
         <Header />
         <Routes>
          
         
          <Route path="/" component={<Home />} />
          <Route path="/welcome" component={<Welcome />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    
  );
};

export default App;
