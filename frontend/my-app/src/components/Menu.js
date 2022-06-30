import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <select>
                <Link to="/profile">
                <option >Modifier mon profil</option>
                </Link>
                <Link to="/">
                <option onClick="signout()">Se déconnecter</option>
                </Link>
                <option onClick="deleteProfile()">Supprimer mon compte</option>
                <option></option>
            </select>
        </div>
    );
};

export default Menu;