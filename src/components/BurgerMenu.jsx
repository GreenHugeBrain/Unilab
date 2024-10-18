import React from 'react';
import style from '../css/BurgerMenu.module.css';

const BurgerMenu = ({ isOpen, toggleMenu, t }) => (
    <div className={style.burger} onClick={toggleMenu}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
        {isOpen && (
            <div className={style.menu}>
                <ul>
                    <li>{t.home}</li>
                    <li>{t.category}</li>
                    <li>{t.contact}</li>
                    <li>{t.joinCommunity}</li>
                </ul>
            </div>
        )}
    </div>
);

export default BurgerMenu;
