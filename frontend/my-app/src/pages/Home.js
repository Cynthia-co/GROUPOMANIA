import React from 'react';
import Logo from '../components/Logo';
import Connexion from '../components/Connexion';

const Home = () => {
    return (
        <div>
            <Logo />
            <h1>Bienvenue sur Groupomania, votre réseau social d'entreprise!</h1>
            <Connexion />
            <button>S'inscrire</button>
        </div>
    );
};

export default Home;