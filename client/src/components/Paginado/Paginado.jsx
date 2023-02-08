import React from "react";
import style from "./Paginado.module.css";
//Le pasamos como props            recetasPorPagina, recetas, la funcion paginado
export default function Paginado({ recipesPerPage, recipes, paginado }) {
  const pageNumbers = [];
  //Devolvemos el entero mayor o igual mas proximo al numero que nos de
  //Queremos iterar hasta que i sea menor o igual que la longitud de las recetas dividido por las recetas por pagina

  // Por ejemplo, si tenemos 100 recetas... 100 / 9 ==> 12, es decir que tendriamos nuestros 12 botones si tenemos 100 recetas
  for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.container}>
      <div>
        {pageNumbers?.map((number) => (
          <button
            className={style.buttonStyle}
            onClick={() => paginado(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
