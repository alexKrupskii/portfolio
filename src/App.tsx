import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import { NavLink } from "react-router-dom";
import style from "./components/Navbar/Navbar.module.scss";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Content />
            <nav>
                <div className="nav-wrap">
                    <input type="checkbox" id="hamburger" />
                    <label htmlFor="hamburger" className="hamburger">
                        <span></span>
                    </label>
                    <label htmlFor="hamburger" className="menu-bg">
                        <NavLink to='home' className={style.nav__item} activeClassName={style.activeLink}>Home</NavLink>
                        <NavLink to='about' className={style.nav__item} activeClassName={style.activeLink}>About</NavLink>
                        <NavLink to='skills' className={style.nav__item} activeClassName={style.activeLink}>Skills</NavLink>
                        <NavLink to='works' className={style.nav__item} activeClassName={style.activeLink}>Works</NavLink>
                        <NavLink to='contact' className={style.nav__item} activeClassName={style.activeLink}>Contact</NavLink>
                    </label>
                </div>
            </nav>
        </div>
    );
}

export default App;
