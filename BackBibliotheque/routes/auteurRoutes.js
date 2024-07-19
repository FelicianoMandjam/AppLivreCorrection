const express = require("express");
const router = express.Router();
const { getAllAuteurs } = require("../controllers/auteurController");
router.get("/auteurs", getAllAuteurs);

module.exports = router;
