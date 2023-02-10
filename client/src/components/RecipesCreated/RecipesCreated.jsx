import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./RecipesCreated.module.css";

const RecipesCreated = () => {
  const [recipesCreated, setRecipesCreated] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/recipesDb")
      .then((data) => setRecipesCreated(...recipesCreated, data.data));
  }, []);

  return (
    <div className={style.containerCards}>
      {!recipesCreated.length && (
        <h1 className={style.warningRecipe}>Aun no has creado una receta </h1>
      )}
      {recipesCreated?.map((recipe) => (
        <Card
          key={recipe.name}
          id={recipe.id}
          name={recipe.name}
          image={recipe.image}
          diets={recipe.diets}
        />
      ))}
    </div>
  );
};

export default RecipesCreated;
