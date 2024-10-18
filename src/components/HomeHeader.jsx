import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import MainImage from '../assets/dogandhuman.svg';
import style from '../css/HomeHeader.module.css';
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
        <a href="/Category"><li>{t.category}</li></a>
        <a href="/Contact"><li>{t.contact}</li></a>
    </ul>
);

const HeaderButtons = ({ t, onLanguageChange }) => (
    <div className={style.buttons}>
        <button>{t.joinCommunity}</button>
        <LanguageSelector onLanguageChange={onLanguageChange} />
    </div>
);

const HeaderMainContent = ({ t }) => (
    <div className={style.header_main}>
        <div className={style.header_main_textes}>
            <h1>{t.oneMoreFriend}</h1>
            <p className={style.header_main_textes_first}>{t.thousandsMoreFun}</p>
            <p className={style.miniP}>{t.petInfo}</p>
            <div className={style.main_buttons}>
                <button>{t.viewIntro} <span className="material-symbols-outlined">play_circle</span></button>
                <button>{t.exploreNow}</button>
            </div>
        </div>
        <div className={style.header_main_images}>
            <img src={MainImage} alt="Main" />
        </div>
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
        <header className={style.header}>
            <div>
                <div className={style.rect1}></div>
                <div className={style.rect2}></div>
                <div className={style.rect3}></div>
                <div className={style.rect4}></div>
            </div>
            <nav>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <NavMenu t={t} />
                <HeaderButtons t={t} onLanguageChange={handleLanguageChange} />
                <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} t={t} /> {/* ბურგერ მენიუს დამატება */}
            </nav>
            <HeaderMainContent t={t} />
        </header>
    );
};

export default Header;
