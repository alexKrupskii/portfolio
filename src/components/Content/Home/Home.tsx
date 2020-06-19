import React from "react";
import style from "./Home.module.scss";
import {Animated} from "react-animated-css";
import {NavLink}  from "react-router-dom";

function Home () {

    return (
        <div className={style.home}>
                <Animated className={style.homeTitle} animationIn="fadeInUp" animationOut="fadeOut" isVisible={true} animationInDelay={1600} animationInDuration={600} >
                    <h2 className={style.subTitle}>HI THERE !</h2>
                    <h1 className={style.title}>I'M <span>ALEXANDR KRUPSKII</span></h1>
                    <span className={style.text}>
                        I'm a Russian based front‑end developer focused on crafting
                        clean & user‑friendly experiences, I am passionate about building excellent
                        software that improves the lives of those around me.
                    </span>
                    <div>
                        <NavLink to='about' className={style.btn} activeClassName={style.activeLink}>MORE ABOUT ME</NavLink>
                    </div>
                </Animated>
            <div className={style.photo}>
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={1300} animationInDuration={700} >
                    <div className={style.colorBlock}></div>
                </Animated>
                <Animated className={style.photo} animationIn="fadeInRight" animationOut="fadeOut" isVisible={true} animationInDelay={2000} animationInDuration={800} >

                        <div className={style.photoImg}></div>

                </Animated>
            </div>

        </div>
    );
}
// "https://avatars.mds.yandex.net/get-pdb/2339219/a03b5fc4-4c91-4836-9af2-8324849215c5/s1200"

export default Home;