import React from "react";

const Connexion = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form>
        <label>Email :</label>
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
      </form>
    </div>
  );
};

export default Connexion;
