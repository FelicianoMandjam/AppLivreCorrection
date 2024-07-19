import React, { useState, useEffect } from "react";
import axios from "axios";

const AuteurList = () => {
  const [auteurs, setAuteurs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auteurs")
      .then((response) => setAuteurs(response.data))
      .catch((error) => console.error("Error fetching auteurs:", error));
  }, []);

  return (
    <div>
      <h2>Auteurs</h2>
      <ul>
        {auteurs.map((auteur) => (
          <li key={auteur.auteur_id}>
            {auteur.nom} {auteur.prenom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuteurList;
