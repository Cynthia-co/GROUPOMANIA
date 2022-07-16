import React, { useContext } from "react";
import Logoinline from "../components/Logoinline";
import Navbarpage from "../components/Navbarpage";
import NewPost from "../components/NewPost";
import Thread from "../components/Thread";
import Home from "./Home";

const Welcome = () => {
  const uid = useContext(UidContext);

  return (
    <div>
      <Logoinline />
      <Navbarpage />
      <Thread />
      <div>
        {uid ? <NewPost /> : <Home/> }
      </div>
      <h2>Bienvenue, </h2>
      <button  className="addArticle">
        +
      </button>
      
    </div>
  );
};

export default Welcome;
