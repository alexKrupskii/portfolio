import React from "react";
import style from "./Content.module.scss";
import Home from "./Home/Home";
import {Route} from "react-router";
import About from "./About/About";

function Content () {
    return (
        <div className={style.content}>
            <Route path='/home' render = {()=><Home />}/>
            <Route path='/about' render = {()=><About />}/>
        </div>
    );
}

export default Content;