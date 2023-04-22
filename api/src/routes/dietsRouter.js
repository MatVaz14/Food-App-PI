const { Router } = require("express");
const { getAllDiets } = require("../handlers/dietsHandler");

const dietsRouter = Router();

//Rutas
dietsRouter.get("/diets", getAllDiets);

module.exports = dietsRouter;
