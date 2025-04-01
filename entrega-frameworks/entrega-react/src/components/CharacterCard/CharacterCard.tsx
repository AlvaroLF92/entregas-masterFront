import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { CharacterCardProps } from "../../model";
import "./CharacterCard.css";

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <TableRow>
      <TableCell>
        <img src={character.image} alt={character.name} className="character-avatar" />
      </TableCell>
      <TableCell>{character.name}</TableCell>
      <TableCell>{character.status}</TableCell>
      <TableCell>{character.species}</TableCell>
      <TableCell>
        <Link to={`/detail-character/${character.id}`}>Ver Detalles</Link>
      </TableCell>
    </TableRow>
  );
};
