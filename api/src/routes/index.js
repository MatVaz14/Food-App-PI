const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require("./recipesRouter.js");
const dietsRouter = require("./dietsRouter.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", recipesRouter);
router.use("/", dietsRouter);

module.exports = router;
