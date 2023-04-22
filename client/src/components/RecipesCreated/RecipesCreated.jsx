import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "./RecipesCreated.module.css";

const RecipesCreated = () => {
  const [recipesCreated, setRecipesCreated] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipesDb")
      .then((data) => setRecipesCreated(...recipesCreated, data.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.containerCards}>
      <div className={style.back}>
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>
      {!recipesCreated.length && (
        <div className={style.containerWanringRecipe}>
          <div className={style.warningGo}>
            <h1 className={style.warningRecipe}>
              You haven't created a recipe yet{" "}
            </h1>
            <span>Create One! :)</span>
            <Link to="/createRecipe">
              <button>Go!</button>
            </Link>
          </div>
        </div>
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
