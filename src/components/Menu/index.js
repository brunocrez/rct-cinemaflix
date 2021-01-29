import React from 'react';
import Logo from '../../assets/images/Logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

export default function Menu() {
    return (
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="BRFLIX LOGO" />
            </a>

            <ButtonLink href="/" className="ButtonLink">Novo Vídeo</ButtonLink>
        </nav>
    );
}