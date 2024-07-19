import React, { useState, useEffect } from "react";
import axios from "axios";

const LivreForm = () => {
  const [titre, setTitre] = useState("");
  const [auteurId, setAuteurId] = useState("");
  const [auteurs, setAuteurs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/authors")
      .then((response) => setAuteurs(response.data))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/books", { titre, auteur_id: auteurId })
      .then(() => {
        setTitre("");
        setAuteurId("");
      })
      .catch((error) => console.error("Error adding livre:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajout Livre</h2>
      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        required
      />

      <select
        value={auteurId}
        onChange={(e) => setAuteurId(e.target.value)}
        required
      >
        <option value="">Select Auteur</option>
        {auteurs.map((auteur) => (
          <option key={auteur.auteur_id} value={auteur.auteur_id}>
            {auteur.name}
          </option>
        ))}
      </select>
      <button type="submit">Ajout Livre</button>
    </form>
  );
};

export default LivreForm;
