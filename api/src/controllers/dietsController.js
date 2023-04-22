const { Diet } = require("../db");
const { infoTotal } = require("../controllers/dataApi");

const DIETAS = async () => {
  const data = await infoTotal();
  const diets = await data.map((recipe) => recipe.diets);
  //Utilizo el metodo de array flat para crear un nuevo arreglo con todos los elementos de sub-array concatenados recursivamente
  const dietsFilter = diets.flat();
  //Hago un filter con un indexOf para recorrer el array de dietsFilter y quitar los elementos repetidos y dejarlos por unica vez
  const dietsFinal = dietsFilter.filter((item, index) => {
    return dietsFilter.indexOf(item) === index;
  });
  const dietCreated = [];
  for (let i = 0; i < dietsFinal.length; i++) {
    dietCreated.push({ name: dietsFinal[i] });
  }
  return await dietCreated;
};

const loadDiets = async () => {
  const data = await DIETAS();
  await Diet.bulkCreate(data);
  console.log("Db Diet Created");
};

module.exports = { loadDiets, DIETAS };
