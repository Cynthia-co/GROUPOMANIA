import React from 'react';
import Logo from '../components/Logo';
import Menu from "../components/Menu";
import Cards from "../components/Cards";

const Welcome = () => {
    return (
        <div>
            <Logo />
            <Menu />
            <h2>Bienvenue, {name}</h2>
            <Cards />
        </div>
    );
};

export default Welcome;