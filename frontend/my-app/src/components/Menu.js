import React from 'react';
import Profile from './components/Profile';

const Menu = () => {
    return (
        <div>
            <select>
                <option>Modifier mon profil</option>
                <option>Se déconnecter</option>
                <option>Supprimer mon compte</option>
                <option><Profile /></option>
            </select>
        </div>
    );
};

export default Menu;