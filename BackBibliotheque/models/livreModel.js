const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const Auteur = require("./auteurModel");

const Livre = sequelize.define(
  "Livre",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auteurId: {
      type: DataTypes.INTEGER,
      references: {
        model: Auteur,
        key: "id",
      },
    },
  },
  {
    timestamps: false, // Désactiver createdAt et updatedAt
    tableName: "Livre", // Spécifiez le nom de la table si nécessaire
  }
);

module.exports = Livre;
