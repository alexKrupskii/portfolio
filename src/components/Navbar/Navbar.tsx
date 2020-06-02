import React from "react";
import style from "./Navbar.module.scss";
import {NavLink}  from "react-router-dom";

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.wrapper}>
                <NavLink to='home' className={style.nav__item} activeClassName={style.activeLink}>Home</NavLink>
                <NavLink to='about' className={style.nav__item} activeClassName={style.activeLink}>About</NavLink>
                <NavLink to='skills' className={style.nav__item} activeClassName={style.activeLink}>Skills</NavLink>
                <NavLink to='works' className={style.nav__item} activeClassName={style.activeLink}>Works</NavLink>
                <NavLink to='contact' className={style.nav__item} activeClassName={style.activeLink}>Contact</NavLink>
            </div>
        </div>
    );
}

export default Navbar;