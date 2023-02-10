import { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";

//Pages / Components
import {
  NavBar,
  Home,
  Detail,
  LandingPage,
  FormCreateRecipe,
  RecipesCreated,
  Loading,
} from "./pages";
import { getDiets, getRecipes } from "./Redux/actions";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const DIETS = useSelector((state) => state.diets);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
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
              <Home DIETS={DIETS} />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/createRecipe"
          render={() => (
            <Suspense fallback={<Loading />}>
              <FormCreateRecipe />
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
