import React, { useState } from "react";

const Connect = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signbox">
      <form>
        <div className="item">
          <label>Email :</label>
          <input
            type="text"
            value={mail}
            required
            onChange={(e) => {
              handleMail(e);
            }}
          />
        </div>
        <div className="item">
          <label> Mot de passe:</label>
          <input
            type="text"
            value={password}
            required
            onChange={(e) => {
              handlePassword(e);
            }}
          />
        </div>
        <button className="button" onClick="connectProfile()">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Connect;
