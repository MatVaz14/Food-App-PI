import { Suspense, lazy } from "react";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";
import NavBar from "../../components/NavBar/NavBar";

//Implementando loading
const HomeComponent = lazy(() =>
  import("../../components/HomeComponent/HomeComponent")
);
const FilterComponents = lazy(() =>
  import("../../components/FiltersComponents/FilterComponents")
);
//Page / Componente
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={style.container}>
        <div className={style.containerFilter}>
          <Suspense>
            <div className={style.containerBorder}>
              <FilterComponents />
            </div>
          </Suspense>
        </div>
        <Suspense fallback={<Loading />}>
          <div className={style.containerHome}>
            <HomeComponent />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
