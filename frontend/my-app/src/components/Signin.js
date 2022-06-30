import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signin = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="signbox">
      <form
        onSubmit={(e) => {
          handleName(e);
        }}
      >
        <div className="item">
          <label> Nom:</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleName(e);
            }}
          />
        </div>
        <div className="item">
          <label> Prénom:</label>
          <input
            type="text"
            value={surname}
            required
            onChange={(e) => {
              handleSurname(e);
            }}
          />
        </div>
        <div className="item">
          <label> Email:</label>
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
        <div className="item">
          <label> Confirmation du mot de passe:</label>
          <input
            type="text"
            value={confirmPassword}
            required
            onChange={(e) => {
              handleConfirmPassword(e);
            }}
          />
        </div>
        <Link to="/profile:id">
          <button className="button" onClick="createProfile()">
            S'incrire
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
