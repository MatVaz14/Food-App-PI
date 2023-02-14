const {
  // Importamos nuestros controllers
  getAllRecipes,
  getRecipesByName,
  getRecipesById,
  createRecipe,
  getDataBase,
  updateRecipe,
  deleteRecipe,
} = require(".././controllers/recipesController");

//Ruta en las que obtenemos la Informacion desde la API
const getRecipes = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const recipeName = await getRecipesByName(name);
      res.status(200).send(recipeName);
    } else {
      // En vez de esto, deberia de indicar otro mensaje. o lo podria hacer sin una condicional
      const data = await getAllRecipes();
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(400).json({ error: "Recipees Not Found" });
  }
};
const getRecipesByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const data = await getRecipesById(id);
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

//Ruta en las que obtenemos la Informacion desde la Base de Datos
const getDb = async (req, res) => {
  try {
    const data = await getDataBase();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

//----------------------------------- RUTA POST -----------------------------------\\
const postRecipes = async (req, res) => {
  const { name, summary, healthScore, image, steps, DietId } = req.body;
  try {
    const newRecipe = await createRecipe(
      name,
      summary,
      healthScore,
      image,
      steps,
      DietId
    );
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//RECORDAR QUE LOS HANDLERS - NO - deben interactuar con los modelos

module.exports = {
  getRecipes,
  getRecipesByID,
  postRecipes,
  getDb,
};
