import React from "react";
import Logoinline from "../components/Logoinline";
import Navbarpage from "../components/Navbarpage";
import Thread from "../components/Thread";

const Welcome = () => {
  return (
    <div>
      <Logoinline />
      <Navbarpage />
      <Thread />
      <h2>Bienvenue, </h2>
      <button  className="addArticle">
        +
      </button>
      
    </div>
  );
};

export default Welcome;
