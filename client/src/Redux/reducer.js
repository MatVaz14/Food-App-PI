import {
  GET_RECIPES,
  GET_DIETS,
  FILTER_DIETS,
  FILTER_HEALTHSCORE,
  FILTER_ALPHABETICAL,
} from "./actions_type";

const initialState = {
  recipesOrigin: [], // ORIGINAL
  recipes: [], // LO USARE PARA LOS FILTROS
  recipesCreated: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesOrigin: action.payload,
        recipes: [...action.payload],
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_DIETS:
      const data = [...state.recipes];
      const dataFilter = data.filter((recipe) =>
        recipe.diets.includes(action.payload)
      );
      return {
        ...state,
        recipesOrigin: dataFilter,
      };
    case FILTER_HEALTHSCORE:
      const orderCopy = [...state.recipesOrigin];
      const order = orderCopy.sort((a, b) => {
        if (a.healthScore > b.healthScore) {
          return "upward" === action.payload ? 1 : -1;
        }
        if (a.healthScore < b.healthScore) {
          return "falling" === action.payload ? 1 : -1;
        }
      });
      return {
        ...state,
        recipesOrigin: order,
      };
    case FILTER_ALPHABETICAL:
      const orderFilterAlphabetical = [...state.recipesOrigin];
      let orderAlphanetical = [];
      if (action.payload === "az") {
        orderAlphanetical = orderFilterAlphabetical.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        orderAlphanetical = orderFilterAlphabetical.sort(function (a, b) {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
      return {
        ...state,
        recipesOrigin: orderAlphanetical,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
