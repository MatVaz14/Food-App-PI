const { Diet } = require("../db");
const { loadDiets, DIETAS } = require("../controllers/dietsController");

const getAllDiets = async (req, res) => {
  const data = await Diet.findAll();
  res.status(200).send(data);
};

// handler de prueba, solo uso de desarrollo
const tenDieta = async (req, res) => {
  const data = await DIETAS();
  res.status(200).send(data);
};

module.exports = { getAllDiets, tenDieta };
