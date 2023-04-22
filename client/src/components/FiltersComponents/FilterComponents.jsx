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

  // const filter = (diet) => {
  //   dispatch(filterByDiets(diet));
  // };

  // const filterHealthScore = (order) => {
  //   dispatch(filterByHealthScore(order));
  // };

  // const filterAlphabetical = (order) => {
  //   dispatch(filterByAlphabetical(order));
  // };
  //Funciones
  const handleClick = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "diet") {
      return dispatch(filterByDiets(value));
    }
    if (name === "Alphabetic") {
      return dispatch(filterByAlphabetical(value));
    }
    if (name === "healthScore") {
      return dispatch(filterByHealthScore(value));
    }
  };
  console.log(diets);
  return (
    <div className={style.container}>
      <div className={style.options}>
        <div>
          {/* <h3>Recipes</h3> */}
          <button onClick={() => reset()}>All Recipes - Refresh</button>
        </div>

        <div>
          {/* <h3>Recipes Created</h3> */}
          <Link to="/recipesCreated" className={style.linkStyle}>
            <button className={style.styleDiets}>Recipes Created - Go!</button>
          </Link>
        </div>

        <div>
          {/* <h3>Order Health Score</h3>
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
          </button> */}
          <select
            defaultValue="DEFAULT"
            name="healthScore"
            onChange={handleClick}
          >
            <option value="DEFAULT" disabled>
              Health Score
            </option>
            <option value="upward">Upward</option>
            <option value="falling">Falling</option>
          </select>
        </div>

        <div>
          {/* <h3>Order Alphabetic</h3>
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
          </button> */}
          <select
            defaultValue="DEFAULT"
            name="Alphabetic"
            onChange={handleClick}
          >
            <option value="DEFAULT" disabled>
              Alphabetic
            </option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
        </div>

        <div>
          {/* <h3>Diets</h3>
          {diets.map((diet) => (
            <button
              onClick={(event) => filter(event.target.value)}
              className={style.styleDiets}
              value={diet.name}
            >
              {diet.name}
            </button>
          ))} */}
          <select defaultValue="DEFAULT" name="diet" onChange={handleClick}>
            <option value="DEFAULT" disabled>
              Diet
            </option>
            <option value="gluten free">Gluten Free</option>
            <option value="dairy free">Dairy Free</option>
            <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="fodmap friendly">Fodmap friendly</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterComponents;
