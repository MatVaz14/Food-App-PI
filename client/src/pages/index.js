//importamos los componentes a este archivo para no tener tanto codigo en app
//Para poder desestructurar todo de un solo lugar
import { lazy } from "react";

import NavBar from "../components/NavBar/NavBar";
import Loading from "../components/Loading/Loading";
import RecipesCreated from "../components/RecipesCreated/RecipesCreated";

const LandingPage = lazy(() =>
  import("../components/LandingPageComponent/LandingPage")
);
const Detail = lazy(() => import("../components/Detail/Detail"));
const FormCreateRecipe = lazy(() =>
  import("../components/FormCreateRecipe/FormCreateRecipe")
);
const Home = lazy(() => import("../pages/Home/Home"));

export {
  LandingPage,
  NavBar,
  Home,
  FormCreateRecipe,
  Detail,
  Loading,
  RecipesCreated,
};
