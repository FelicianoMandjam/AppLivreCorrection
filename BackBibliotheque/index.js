const express = require("express");
const sequelize = require("./config");
const livreRoutes = require("./routes/livreRoutes");
const auteurRoutes = require("./routes/auteurRoutes");

const app = express();

//Synchronisation de la BD
console.log("je suis sur le dev et BD");
sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Unable to create tables:", err);
  });

app.use(express.json());
app.use("/", livreRoutes);
app.use("/", auteurRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Le serveur tourne sur le port ${PORT}");
  });
});
