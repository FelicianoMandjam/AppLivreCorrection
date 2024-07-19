const Livre = require("../models/livreModel");

exports.getAllLivres = async (req, res) => {
  try {
    console.log("connexion");
    const livres = await Livre.findAll();
    res.json(livres);
  } catch (error) {
    res.status(500).json({ error: "Une erreur est survenue" });
  }
};
