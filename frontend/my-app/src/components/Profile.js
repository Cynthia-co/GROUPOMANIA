import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [pseudo, setPseudo] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };
  const handlePseudo = (e) => {
    setPseudo(e.target.value);
  };

  return (
    <div>
      <h2>Modifiez votre profil:</h2>
      <form
        onSubmit={(e) => {
          handlePseudo(e);
        }}
      >
        <div className="item">
          <label> Nouveau mot de passe:</label>
          <input
            type="text"
            value={newPassword}
            required
            onChange={(e) => {
              handleNewPassword(e);
            }}
          />
        </div>
        <div className="item">
          <label> Confirmation du nouveau mot de passe:</label>
          <input
            type="text"
            value={confirmNewPassword}
            required
            onChange={(e) => {
              handleConfirmNewPassword(e);
            }}
          />
        </div>
        <div className="item">
          <label> Pseudo:</label>
          <input
            type="text"
            value={pseudo}
            required
            onChange={(e) => {
              handlePseudo(e);
            }}
          />
        </div>
        <div className="item">
          <label>Photo de profil</label>
        </div>
        <Link to="/welcome">
          <button>Enregistrer les modifications</button>
        </Link>
      </form>
    </div>
  );
};

export default Profile;
