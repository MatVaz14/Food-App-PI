import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.containerButtons}>
        <Link className={style.styleLinks} to="/home">
          Food-App Home
        </Link>
        <SearchBar />
        <Link className={style.styleLinks} to="/createRecipe">
          Create Recipe
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
