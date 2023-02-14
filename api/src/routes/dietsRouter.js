const { Router } = require("express");
const { getAllDiets, tenDieta } = require("../handlers/dietsHandler");

const dietsRouter = Router();

//Rutas
dietsRouter.get("/diets", getAllDiets);
//Ruta get solo de desarrollo
dietsRouter.get("/dietita", tenDieta);
module.exports = dietsRouter;
