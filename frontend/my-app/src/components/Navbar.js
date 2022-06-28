import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <Link to="/connexion"><button className='navhome'>Se connecter</button></Link>
            <Link to="/signin"><button className='navhome'>S'inscrire</button></Link>
        </div>
    );
};

export default Navbar;