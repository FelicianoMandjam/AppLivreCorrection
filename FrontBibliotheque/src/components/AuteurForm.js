import React, { useState } from "react";
import axios from "axios";

const AuteurForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/authors", { nom })
      .then(() => {
        setNom("");
        setPrenom("");
      })
      .catch((error) => console.error("Error adding auteur:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajout Auteur</h2>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Prenom"
        value={nom}
        onChange={(e) => setPrenom(e.target.value)}
        required
      />

      <button type="submit">Ajout Auteur</button>
    </form>
  );
};

export default AuteurForm;
