import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { fetchCharactersData } from "../../services/characterService";
import { CharacterEntity } from "../../model";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import "./RickAndMortyPage.css";
import { useNavigate } from "react-router-dom";

export const RickAndMortyPage: React.FC = () => {
  const [allCharacters, setAllCharacters] = useState<CharacterEntity[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterEntity[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const navigate = useNavigate();

  // Cargar todos los personajes desde el servicio
  useEffect(() => {
    fetchCharactersData("")
      .then((results) => {
        setAllCharacters(results);
        setFilteredCharacters(results); // Inicialmente no hay filtro, por lo que se usan todos los personajes
      })
      .catch((error) => {
        console.error("Error al obtener personajes:", error);
      });
  }, []); // Se ejecuta solo cuando el componente se monta

  // Aplicar filtro de búsqueda cada vez que el término de búsqueda cambie
  useEffect(() => {
    const filtered = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
    setPage(1); // Restablecer la página cuando cambie el filtro
  }, [searchTerm, allCharacters]);

  // Manejar la búsqueda
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Manejo de la paginación
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="list-container">
      <button onClick={() => navigate("/home")}>Ir a Home</button>
      <h2 className="list-title">Personajes de Rick and Morty</h2>
      <div className="filter-bar">
        <FilterBar onFilter={handleSearch} placeholder="Filtrar personaje" />
      </div>
      <Pagination
        count={Math.ceil(filteredCharacters.length / rowsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        className="pagination"
      />
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Especie</TableCell>
              <TableCell>Detalles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCharacters
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {filteredCharacters.length === 0 && (
        <div className="no-characters-message">
          No se encontraron personajes.
        </div>
      )}
    </div>
  );
};
