import React, { useState, useEffect } from "react";
import axios from "axios";

const LivreList = () => {
  const [livres, setLivres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => setLivres(response.data))
      .catch((error) => console.error("Error fetching livres:", error));
  }, []);

  return (
    <div>
      <h2>Livres</h2>
      <ul>
        {livres.map((livre) => (
          <li key={livre.livre_id}>{livre.titre} </li>
        ))}
      </ul>
    </div>
  );
};

export default LivreList;
