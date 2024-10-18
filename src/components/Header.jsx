import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import style from '../css/Header.module.css';
import translations from '../jsons/translations.js';
import BurgerMenu from './BurgerMenu';

const LanguageSelector = ({ onLanguageChange }) => (
    <select onChange={onLanguageChange}>
        <option value="en">🇺🇸</option>
        <option value="ka">🇬🇪</option>
    </select>
);

const NavMenu = ({ t }) => (
    <ul id={style.nav}>
        <a href="/"><li>{t.home}</li></a>
        <a href="/category"><li>{t.category}</li></a>
        <a href="/contact"><li>{t.contact}</li></a>
    </ul>
);

const HeaderButtons = ({ t, onLanguageChange }) => (
    <div className={style.buttons}>
        <button>{t.joinCommunity}</button>
        <LanguageSelector onLanguageChange={onLanguageChange} />
    </div>
);


const Header = () => {
    const [language, setLanguage] = useState('en');
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const t = translations[language];

    return (
        <header>
            <nav>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <NavMenu t={t} />
                <HeaderButtons t={t} onLanguageChange={handleLanguageChange} />
                <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} t={t} />
            </nav>
        </header>
    );
};

export default Header;
