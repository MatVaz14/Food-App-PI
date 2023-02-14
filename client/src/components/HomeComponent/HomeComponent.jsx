import React, { useState } from "react";
import Card from "../Card/Card";
import ChangePerPage from "../ChangePerPage/ChangePerPage";
import Paginado from "../Paginado/Paginado";
import style from "./HomeComponent.module.css";

const HomeComponent = ({ recipes }) => {
  //Datos necesarios para armar el paginado
  //Primero armo un estado local, el cual lo inicire con 1
  const [currentPage, setCurrentPage] = useState(1);

  //Luego defino un estado local para las recetas que quiermo mostrar por paginas, en este caso 9 recetas por pagina
  // eslint-disable-next-line
  const [recipesPerPage, setRecipesPerPage] = useState(9);

  const indexLastRecipe = currentPage * recipesPerPage; // Obtenemos el ultimo indice de las recetasm seria la pagina actual (1) por las recetas por pagina (9) = 9
  const indexFirstRecipe = indexLastRecipe - recipesPerPage; // obtenemos el indice de la primera receta ====> 9 - 9 = 0, entonces...
  const currentRecipes = recipes.slice(indexFirstRecipe, indexLastRecipe); // recipes.slice(0,9), en la segunda vuelta seria 2 * 9 = 18, 18 - 9 = 9, recipes.slice(9, 18)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1 && currentPage <= indexFirstRecipe) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  };
  console.log(currentPage);
  const nextPage = (ultimaPagina) => {
    if (currentPage >= 1 && currentPage <= ultimaPagina) {
      setCurrentPage(currentPage + 1);
    } else {
      return;
    }
  };

  return (
    <div className={style.container}>
      <ChangePerPage
        setRecipesPerPage={setRecipesPerPage}
        setCurrentPage={setCurrentPage}
      />
      {currentRecipes.length ? (
        <div>
          <Paginado
            recipesPerPage={recipesPerPage}
            recipes={recipes}
            paginado={paginado}
            nextPage={nextPage}
            prevPage={prevPage}
          />
          <span className={style.styleSpan}>Page {currentPage}</span>
        </div>
      ) : null}

      <div className={style.containerCards}>
        {currentRecipes.map((recipe) => (
          <Card
            key={recipe.name}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            diets={recipe.diets}
          />
        ))}
      </div>

      {!currentRecipes.length && (
        <div className={style.containerErrorFound}>
          <h1 className={style.errorFound}>No recipes found ☹</h1>
        </div>
      )}

      {currentRecipes.length ? (
        <div>
          <Paginado
            recipesPerPage={recipesPerPage}
            recipes={recipes}
            paginado={paginado}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      ) : null}
    </div>
  );
};

export default HomeComponent;
