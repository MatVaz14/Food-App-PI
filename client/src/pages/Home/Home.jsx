import React, { Suspense, lazy } from "react";
// import HomeComponent from "../../components/HomeComponent/HomeComponent";
// import FilterComponents from "../../components/FiltersComponents/FilterComponents";
import { useSelector } from "react-redux";
// import { getRecipes } from "../../Redux/actions";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";

//Implementando loading
const HomeComponent = lazy(() =>
  import("../../components/HomeComponent/HomeComponent")
);
const FilterComponents = lazy(() =>
  import("../../components/FiltersComponents/FilterComponents")
);
const Home = ({ DIETS }) => {
  const recipes = useSelector((state) => state.recipesOrigin); // Nos 'suscribimos' al estado global, traemos las recetas

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRecipes()); // Despachamos la action para traer las recetas
  // }, []);

  return (
    <div>
      <div className={style.container}>
        <div className={style.containerFilter}>
          <Suspense>
            <div className={style.containerBorder}>
              <FilterComponents diets={DIETS} />
            </div>
          </Suspense>
        </div>
        <Suspense fallback={<Loading />}>
          <div className={style.containerHome}>
            <HomeComponent recipes={recipes} />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
