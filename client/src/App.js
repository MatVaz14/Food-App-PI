import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import "./App.css";
// import Detail from "./components/Detail/Detail";
//Pages / Components
import Loading from "./components/Loading/Loading";
import { NavBar, Home, FormCreateRecipe } from "./pages";
import { getDiets } from "./Redux/actions";
const LandingPage = lazy(() =>
  import("./components/LandingPageComponent/LandingPage")
);
const Detail = lazy(() => import("./components/Detail/Detail"));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
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
        <Route exact path="/home" render={() => <Home DIETS={DIETS} />} />
        <Route exact path="/createRecipe" component={FormCreateRecipe} />
        <Route
          exact
          path="/detail/:id"
          render={() => (
            <Suspense fallback={<Loading />}>
              <Detail />
            </Suspense>
          )}
        />
      </>
    </div>
  );
}

export default App;
