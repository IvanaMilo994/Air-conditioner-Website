import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigation/TopBar.css'; 

const TopBar = () => {
    return (
        <div className="top-bar-container">
            <nav className="top-bar">
                <Link to="/" className="icon-link"><FontAwesomeIcon icon={faHouse} /></Link>
                <Link to="/products">Proizvodi</Link>
                <Link to="/aboutus">O nama</Link>
                <Link to="/contact">Kontakt</Link>
            </nav>
        </div>
    );
};

export default TopBar;