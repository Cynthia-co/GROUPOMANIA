import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <div className="author">
        <img className="photoProfil" />
        <p>pseudo</p>
      </div>
      <textarea className="article"></textarea>
      <button className="publier" onClick="addArticle()">Publier</button>
    </div>
  );
};

export default Cards;
