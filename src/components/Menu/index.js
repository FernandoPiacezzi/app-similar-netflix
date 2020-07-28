import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button'



function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Netflix Logo"/>
            </a>

            <Button className="ButtonLink" href="/">  
                Novo Video
            </Button>
        </nav>
    );
}


export default Menu;