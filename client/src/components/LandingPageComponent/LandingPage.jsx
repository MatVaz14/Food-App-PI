import React from "react";
import { Link } from "react-router-dom";
import imageGif from "../../gif/landingPage.gif";
import style from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerIntroduction}>
        <h1>Food App</h1>
        <hr className={style.line} />
        <Link to="/home">
          <button className={style.buttonStyle}>Start</button>
        </Link>
      </div>
      <img src={imageGif} className={style.video} alt="cheff.gif" />
      <div className={style.capa}></div>
    </div>
  );
};

export default LandingPage;
