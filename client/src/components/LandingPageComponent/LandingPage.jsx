import React from "react";
import { Link } from "react-router-dom";
import video from "../../video/landingPage.mp4";
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
      <video src={video} autoPlay loop muted />
      <div className={style.capa}></div>
    </div>
  );
};

export default LandingPage;
