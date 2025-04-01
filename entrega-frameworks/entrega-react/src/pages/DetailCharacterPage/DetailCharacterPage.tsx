import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById } from "../../services/characterService";
import { CharacterEntity } from "../../model";

export const DetailCharacterPage: React.FC = () => {
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] =
    useState<CharacterEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);
      fetchCharacterById(id)
        .then((data) => {
          setCharacterDetails(data);
          setLoading(false);
        })
        .catch((err) => {
          setError("No se pudo cargar los detalles del personaje");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="detail-container">
      <h2>Detalles del Personaje</h2>

      <div className="character-detail">
        <img
          src={characterDetails.image}
          alt={characterDetails.name}
          className="character-image"
        />
        <h3>{characterDetails.name}</h3>
        <p>
          <strong>Estado:</strong> {characterDetails.status}
        </p>
        <p>
          <strong>Especie:</strong> {characterDetails.species}
        </p>
        <p>
          <strong>Género:</strong> {characterDetails.gender}
        </p>
        <p>
          <strong>Origen:</strong> {characterDetails.origin.name}
        </p>
      </div>

      <a href="/rickandmorty">Volver a la lista de personajes</a>
    </div>
  );
};
