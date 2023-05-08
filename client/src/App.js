import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
//Pages / Components
import {
  Home,
  Detail,
  LandingPage,
  Form,
  RecipesCreated,
  Loading,
} from "./pages";
import { getDiets, getRecipes } from "./Redux/actions";
//Refactorizando para Deploy Front
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "food-app-pi-production.up.railway.app";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className="App">
      <>
        <Route
          exact
          path="/"
          render={() => (
            <Suspense fallback={<Loading />}>
              <LandingPage />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/home"
          render={() => (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/createRecipe"
          render={() => (
            <Suspense fallback={<Loading />}>
              <Form />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/detail/:id"
          render={() => (
            <Suspense fallback={<Loading />}>
              <Detail />
            </Suspense>
          )}
        />
        <Route exact path="/recipesCreated" component={RecipesCreated} />
      </>
    </div>
  );
}

export default App;
