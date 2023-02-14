//importamos los componentes a este archivo para no tener tanto codigo en app
//Para poder desestructurar todo de un solo lugar
import { lazy } from "react";

import Loading from "../components/Loading/Loading";
import RecipesCreated from "../components/RecipesCreated/RecipesCreated";

const LandingPage = lazy(() => import("./LandingPage/LandingPage"));
const Detail = lazy(() => import("../components/Detail/Detail"));
const Form = lazy(() => import("./Form/Form"));
const Home = lazy(() => import("../pages/Home/Home"));

export { LandingPage, Home, Form, Detail, Loading, RecipesCreated };
