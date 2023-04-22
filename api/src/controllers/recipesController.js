const { informationDataBase, infoTotal } = require("./dataApi");
const { Recipe } = require(".././db");

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

//Trabajamos con async porque vamos a trabajar con el modelo Recipe, y estos manejan promesas, retornan promesas
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
}; // Recipe.create nos devuelve una promesa

module.exports = {
  getAllRecipes,
  getDataBase,
  getRecipesByName,
  getRecipesById,
  createRecipe,
};
