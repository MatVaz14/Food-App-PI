const { Router } = require("express");
const {
  getRecipes,
  getRecipesByID,
  postRecipes,
  getDb,
} = require("../handlers/recipesHandler");

const recipesRouter = Router();

const validate = (req, res, next) => {
  const { name, summary, steps } = req.body;
  if (!name || !summary || !steps)
    return res.status(400).json({ error: "Missing Data" });
  next();
};

//Rutas
//API
recipesRouter.get("/recipes", getRecipes);
recipesRouter.get("/recipes/:id", getRecipesByID);
recipesRouter.get("/recipesDb", getDb);
//POST - crear recetas
recipesRouter.post("/", validate, postRecipes);

module.exports = recipesRouter;
