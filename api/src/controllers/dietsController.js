const { Diet } = require("../db");
const { infoTotal } = require("../controllers/dataApi");
const diets = require("../data/dataDiets");

const DIETAS = async () => {
  try {
    const data = await infoTotal();
    const diets = await data.map((recipe) => recipe.diets);
    const dietsFilter = diets.flat();
    const dietsFinal = dietsFilter.filter((item, index) => {
      return dietsFilter.indexOf(item) === index;
    });
    const dietCreated = [];
    for (let i = 0; i < dietsFinal.length; i++) {
      dietCreated.push({ name: dietsFinal[i] });
    }

    return await dietCreated;
  } catch (error) {
    console.log("404");
  }
};

const loadDiets = async () => {
  const data = await DIETAS();
  await Diet.bulkCreate(data);
  console.log("Db Diet Created");
};

module.exports = { loadDiets, DIETAS };

/*
  const data = diets.map((diet) => {
    return {
      name: diet.name,
    };
  });
  const infoDB = Diet.findAll();
  if (!infoDB.length) {
    await Diet.bulkCreate(data);
    console.log("Db Diet Created");
  }

*/
