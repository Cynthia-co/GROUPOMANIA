import React from 'react';
import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbarpage = () => {
    return (
        <div>
             {/* <FontAwesomeIcon icon="fa-solid fa-user" />  */}
            <Link to='/'>
            <button> Se déconnecter</button></Link>
        </div>
    );
};

export default Navbarpage;