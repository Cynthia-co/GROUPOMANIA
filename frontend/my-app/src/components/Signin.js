import React, { useState } from "react";

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
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label> Nom:</label>
        <br />
        <input
          type="text"
          value={name}
          required
          onChange={(e) => {
            handleName(e);
          }}
        />
        <br />
        <label> Prénom:</label>
        <br />
        <input
          type="text"
          value={surname}
          required
          onChange={(e) => {
            handleSurname(e);
          }}
        />
        <br />
        <label> Email:</label>
        <br />
        <input
          type="text"
          value={mail}
          required
          onChange={(e) => {
            handleMail(e);
          }}
        />
        <br />
        <label> Mot de passe:</label>
        <br />
        <input
          type="text"
          value={password}
          required
          onChange={(e) => {
            handlePassword(e);
          }}
        />
        <br />
        <label> Confirmation du mot de passe:</label>
        <br />
        <input
          type="text"
          value={confirmPassword}
          required
          onChange={(e) => {
            handleConfirmPassword(e);
          }}
        />
        <br />
      </form>
    </div>
  );
};

export default Signin;
