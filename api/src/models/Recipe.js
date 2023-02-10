const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "-",
      },
      healthScore: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://thumbs.dreamstime.com/b/conjunto-vectorial-de-cocina-gastronom%C3%ADa-y-comida-r%C3%A1pida-iconos-caf%C3%A9s-en-estilo-doodle-gradiente-color-pintado-sobre-una-hoja-197665603.jpg",
      },
      steps: {
        type: DataTypes.STRING,
      },
      create: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

/*
ID: *
Nombre *
Resumen del plato *
Nivel de "comida saludable" (health score)
Paso a paso

*/
