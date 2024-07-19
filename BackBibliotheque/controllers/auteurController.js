const Auteur = require("../models/auteurModel");

exports.getAllAuteurs = async (req, res) => {
  try {
    const auteurs = await Auteur.findAll();
    res.json(auteurs);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue" });
  }
};
