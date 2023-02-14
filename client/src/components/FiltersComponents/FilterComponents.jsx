import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterByAlphabetical,
  filterByDiets,
  filterByHealthScore,
  getRecipes,
} from "../../Redux/actions";
import style from "./Filter.module.css";

//Inicio de Componente
const FilterComponents = () => {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  //Funciones
  const reset = () => {
    dispatch(getRecipes());
  };

  const filter = (diet) => {
    dispatch(filterByDiets(diet));
  };

  const filterHealthScore = (order) => {
    dispatch(filterByHealthScore(order));
  };

  const filterAlphabetical = (order) => {
    dispatch(filterByAlphabetical(order));
  };
  //Funciones

  return (
    <div className={style.container}>
      <div className={style.options}>
        <div>
          <h3>Recipes</h3>
          <button onClick={() => reset()}>All Recipes - Refresh</button>
        </div>
        <hr />
        <div>
          <h3>Recipes Created</h3>
          <Link to="/recipesCreated" className={style.linkStyle}>
            <button className={style.styleDiets}>Go!</button>
          </Link>
        </div>
        <hr />
        <div>
          <h3>Order Health Score</h3>
          <button
            value="upward"
            onClick={(event) => filterHealthScore(event.target.value)}
          >
            Upward
          </button>
          <button
            value="falling"
            onClick={(event) => filterHealthScore(event.target.value)}
          >
            Falling
          </button>
        </div>
        <hr />
        <div>
          <h3>Order Alphabetic</h3>
          <button
            value="az"
            onClick={(event) => filterAlphabetical(event.target.value)}
          >
            A - Z
          </button>
          <button
            value="za"
            onClick={(event) => filterAlphabetical(event.target.value)}
          >
            Z - A
          </button>
        </div>
        <hr />
        <div>
          <h3>Diets</h3>
          {diets.map((diet) => (
            <button
              onClick={(event) => filter(event.target.value)}
              className={style.styleDiets}
              value={diet.name}
            >
              {diet.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponents;
