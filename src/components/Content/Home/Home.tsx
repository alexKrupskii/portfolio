import React from "react";
import style from "./Home.module.scss";

function Home () {
    return (
        <div className={style.home}>
            <div className={style.homeTitle}>
                <h2 className={style.subTitle}>HI THERE !</h2>
                <h1 className={style.title}>I'M <span>ALEXANDR KRUPSKII</span></h1>
                <span className={style.text}>
                    I'm a Russian based web designer & front‑end developer focused on crafting
                    clean & user‑friendly experiences, I am passionate about building excellent
                    software that improves the lives of those around me.
                </span>
                <button className={style.btn}>MORE ABOUT ME</button>
            </div>
            <div className={style.photo}>
                <div className={style.colorBlock}></div>
                <img src={"https://avatars.mds.yandex.net/get-pdb/2339219/a03b5fc4-4c91-4836-9af2-8324849215c5/s1200"}/>
            </div>

        </div>
    );
}

export default Home;