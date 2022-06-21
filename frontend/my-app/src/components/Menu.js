import React from 'react';

const Menu = () => {
    return (
        <div>
            <select>
                <option onClick="changeProfile()">Modifier mon profil</option>
                <option onClick="signout()">Se déconnecter</option>
                <option onClick="deleteProfile()">Supprimer mon compte</option>
                <option></option>
            </select>
        </div>
    );
};

export default Menu;