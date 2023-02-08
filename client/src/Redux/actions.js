import axios from "axios";
import {
  GET_RECIPES,
  GET_DIETS,
  FILTER_DIETS,
  FILTER_HEALTHSCORE,
  FILTER_ALPHABETICAL,
} from "./actions_type";

//COMPONENT HOME - Traemos todos los datos del back
export const getRecipes = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/recipes")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_RECIPES, payload: data }));
  };
};
//SEARCHBAR
export const getRecipesInclude = (name) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/recipes?name=${name}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_RECIPES, payload: data }));
  };
};
//Traemos todas las dietas cargadas en la base de datos
export const getDiets = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/diets")
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_DIETS, payload: data }));
  };
};

//FILTROS
export const filterByDiets = (diet) => {
  return {
    type: FILTER_DIETS,
    payload: diet,
  };
};

export const filterByHealthScore = (order) => {
  return {
    type: FILTER_HEALTHSCORE,
    payload: order,
  };
};

export const filterByAlphabetical = (order) => {
  return {
    type: FILTER_ALPHABETICAL,
    payload: order,
  };
};
