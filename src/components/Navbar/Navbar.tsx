import React from "react";
import style from "./Navbar.module.scss";
import {NavLink}  from "react-router-dom";
import {Animated} from "react-animated-css";

function Navbar() {
    return (
        <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true} animationInDelay={500} animationInDuration={500} >
        <div className={style.navbar}>
            <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true} animationInDelay={900} animationInDuration={500} >
            <div className={style.wrapper}>
                <NavLink to='home' className={style.nav__item} activeClassName={style.activeLink}>Home</NavLink>
                <NavLink to='about' className={style.nav__item} activeClassName={style.activeLink}>About</NavLink>
                <NavLink to='skills' className={style.nav__item} activeClassName={style.activeLink}>Skills</NavLink>
                <NavLink to='works' className={style.nav__item} activeClassName={style.activeLink}>Works</NavLink>
                <NavLink to='contact' className={style.nav__item} activeClassName={style.activeLink}>Contact</NavLink>
            </div>
            </Animated>
        </div>
        </Animated>
    );
}

export default Navbar;