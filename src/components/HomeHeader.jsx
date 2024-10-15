import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import MainImage from '../assets/dogandhuman.svg';
import style from '../css/HomeHeader.module.css';
import translations from '../jsons/translations.js';

const Header = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const t = translations[language];

    return (
        <header>
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
                <ul>
                    <li>{t.home}</li>
                    <li>{t.category}</li>
                    <li>{t.contact}</li>
                </ul>
                <div className={style.buttons}>
                    <button>{t.joinCommunity}</button>
                    <select onChange={handleLanguageChange}>
                        <option value="en">🇺🇸</option>
                        <option value="ka">🇬🇪</option>
                    </select>
                </div>
            </nav>

            <div className={style.header_main}>
                <div className={style.header_main_textes}>
                    <h1>{t.oneMoreFriend}</h1>
                    <p className={style.header_main_textes_first}>{t.thousandsMoreFun}</p>
                    <p className={style.miniP}>{t.petInfo}</p>
                    <div className={style.main_buttons}>
                        <button>{t.viewIntro} <span className="material-symbols-outlined">
                            play_circle
                        </span></button>
                        <button>{t.exploreNow}</button>
                    </div>
                </div>
                <div className={style.header_main_images}>
                    <img src={MainImage} alt="Main" />
                </div>
            </div>
        </header>
    );
};

export default Header;
