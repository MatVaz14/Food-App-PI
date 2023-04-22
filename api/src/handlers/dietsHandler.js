const { Diet } = require("../db");

const getAllDiets = async (req, res) => {
  const data = await Diet.findAll();
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: message.error });
  }
};

module.exports = { getAllDiets };
