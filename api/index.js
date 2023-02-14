const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;
//
const { loadDiets } = require("./src/controllers/dietsController"); //Importamos nuestra funcion para cargar nuestra base de datos
//
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    //
    loadDiets(); //Cargamos la base de datos de Diets
    //
    console.log("%s listening at ", PORT); // eslint-disable-line no-console
  });
});
