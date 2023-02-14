import React from "react";
import { Link } from "react-router-dom";
import imageGif from "./gif/landingPage.gif";
import instaLogo from "./logo/instagram.png";
import linkedinLogo from "./logo/linkedin.png";
import style from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerIntroduction}>
        <h1>Food App</h1>
        <div className={style.containerSocial}>
          <a
            href="https://www.linkedin.com/in/matias-exequiel-vazquez-jaque-b42595254/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={style.styleImg} src={linkedinLogo} alt="" />
          </a>
          <a
            href="https://www.instagram.com/mativazquez_17/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={style.styleImg} src={instaLogo} alt="" />
          </a>
        </div>
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
