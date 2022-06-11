import React, { useState } from "react";

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
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label> Nouveau mot de passe:</label>
        <br />
        <input
          type="text"
          value={newPassword}
          required
          onChange={(e) => {
            handleNewPassword(e);
          }}
        />
        <br />
        <label> Confirmation du nouveau mot de passe:</label>
        <br />
        <input
          type="text"
          value={confirmNewPassword}
          required
          onChange={(e) => {
            handleConfirmNewPassword(e);
          }}
        />
        <br />
        <label> Pseudo:</label>
        <br />
        <input
          type="text"
          value={pseudo}
          required
          onChange={(e) => {
            handlePseudo(e);
          }}
        />
        <br />
      </form>
    </div>
  );
};

export default Profile;
