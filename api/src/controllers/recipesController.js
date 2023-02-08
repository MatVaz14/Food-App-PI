const { informationDataBase, infoTotal } = require("./dataApi");
const axios = require("axios");
const { Recipe, Diet } = require(".././db");

//Obtenemos todoas las recetas desde la api
const getAllRecipes = async () => {
  const api = await infoTotal();
  return api;
};
const getRecipesByName = async (name) => {
  const apiInfo = await infoTotal();
  const data = await apiInfo.filter((i) =>
    i.name.toLowerCase().includes(name.toLowerCase())
  );
  return data;
};
// cambie  recipe.id == id por include
const getRecipesById = async (id) => {
  const data = await infoTotal();
  const infoId = await data.filter((recipe) => recipe.id == id);
  return infoId;
};

//Obtenemos todas las recetas creadas en la base de datos
const getDataBase = async () => {
  const api = await informationDataBase();
  return api;
};

// Filtros - NO ESTA FUNCIONANDO
const getByDiets = async (dietaInclude) => {
  const data = await infoTotal();
  const recipes = await data.filter((recipe) =>
    recipe.diets.includes(dietaInclude)
  );
  return recipes;
};

// Funcion para poder crear nuevas recetas :D
const createRecipe = async (
  name,
  summary,
  healthScore,
  image,
  steps,
  DietId
) => {
  const newRecipe = await Recipe.create({
    name,
    summary,
    healthScore,
    image,
    steps,
  });
  await newRecipe.addDiet(DietId);
  return newRecipe;
}; // Recipe.create nos devuelve una promesa, por ese motivo le hacemos un await

module.exports = {
  getAllRecipes,
  getDataBase,
  getRecipesByName,
  getRecipesById,
  createRecipe,
  getByDiets,
};
