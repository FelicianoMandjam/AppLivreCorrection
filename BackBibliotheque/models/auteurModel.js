const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Auteur = sequelize.define(
  "Auteur",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Désactiver createdAt et updatedAt
    tableName: "Auteur", // Spécifiez le nom de la table si nécessaire
  }
);

module.exports = Auteur;
