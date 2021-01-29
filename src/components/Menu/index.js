import React from 'react';
import Logo from '../../assets/images/Logo.png';
import Button from '../Button';
import './Menu.css';

export default function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="BRFLIX LOGO" />
            </a>
            <Button as="a" className="ButtonLink" href="/">Novo Vídeo</Button>
        </nav>
    );
}