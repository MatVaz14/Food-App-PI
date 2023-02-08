const { Router } = require("express");
const {
  getRecipes,
  getRecipesByID,
  postRecipes,
  getDb,
  getRecipesByDiet,
} = require("../handlers/recipesHandler");

const recipesRouter = Router();

//Rutas
//API
recipesRouter.get("/recipes", getRecipes);
recipesRouter.get("/recipes/:id", getRecipesByID);
//DB
recipesRouter.get("/recipesDb", getDb);
//POST - crear recetas
recipesRouter.post("/", postRecipes);

//Filtros
recipesRouter.get("/recipes/:diets", getRecipesByDiet);

module.exports = recipesRouter;
