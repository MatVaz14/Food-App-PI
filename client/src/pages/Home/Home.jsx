import React, { Suspense, lazy } from "react";

import { useSelector } from "react-redux";

import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";
import NavBar from "../NavBar/NavBar";
//Implementando loading
const HomeComponent = lazy(() =>
  import("../../components/HomeComponent/HomeComponent")
);
const FilterComponents = lazy(() =>
  import("../../components/FiltersComponents/FilterComponents")
);
//Page / Componente
const Home = ({ DIETS }) => {
  const recipes = useSelector((state) => state.recipesOrigin); // Nos 'suscribimos' al estado global, traemos las recetas

  return (
    <div>
      <NavBar />
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
