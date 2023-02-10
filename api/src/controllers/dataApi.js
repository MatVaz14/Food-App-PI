// require("dotenv").config();
// const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");
const axios = require("axios");
const apiKey = "a5737bc0f7524c7584998f5c9eb47c40";
//Primero voy a hacer una funcion para poder extraer los datos que yo necesito
//Luego en otra funcion acomodare los datos para su posterior uso...

const apiInfo = async () => {
  const api = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`
    )
  ).data;
  const information = api.results.map((food) => {
    return {
      id: food.id,
      name: food.title,
      summary: food.summary,
      diets: food.diets,
      image: food.image,
      healthScore: food.healthScore,
      steps: food.analyzedInstructions.map((item) => {
        return {
          step: item.steps.map((item) => item.step),
        };
      }),
    };
  });
  return information;
};

//Esta sera la funcion que utilizare para acomodar los datos finalmente y utilizarlos
const apiData = async () => {
  const data = await apiInfo();
  const Data = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      summary: item.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
      diets: item.diets,
      image: item.image,
      healthScore: item.healthScore,
      steps: item.steps.map((item) => item.step)[0],
      create: false,
    };
  });
  return Data;
};

// Obtenemos los datos de la base de datos
const getDataDb = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const informationDataBase = async () => {
  const data = await getDataDb();
  const info = data.map((inf) => {
    return {
      id: inf.id,
      name: inf.name,
      summary: inf.summary,
      diets: inf.Diets.map((diet) => diet.name),
      image: inf.image,
      healthScore: inf.healthScore,
      steps: [inf.steps],
      create: inf.create,
    };
  });
  return info;
};

const infoTotal = async () => {
  const dataApi = await apiData();
  const dataDb = await informationDataBase();
  const allInfo = dataApi.concat(dataDb);
  return allInfo;
};
// reemplazare getDataDB por informationDataBAse
module.exports = { apiData, informationDataBase, infoTotal };
