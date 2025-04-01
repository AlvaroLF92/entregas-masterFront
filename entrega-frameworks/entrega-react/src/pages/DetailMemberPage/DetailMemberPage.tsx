import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailMemberPage: React.FC = () => {
  const { id, login } = useParams<{ id: string; login: string }>(); 

  return (
    <div>
      <h2>Detalles del Miembro</h2>
      <h3>User ID: {id}</h3>
      <h3>User Name: {login}</h3>
      <Link to="/list">Volver a la lista de miembros</Link>
    </div>
  );
};
