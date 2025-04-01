// ListPage.tsx
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from "@mui/material";
import { fetchMembersData } from "../../services/githubService";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MemberCard } from "../../components/MemberCard/MemberCard";
import { useNavigate } from "react-router-dom";
import "./ListPage.css";

export const ListPage: React.FC = () => {
  const [organization, setOrganization] = useState(localStorage.getItem("organization") || "lemoncode");
  const [page, setPage] = useState(1);
  const [membersData, setMembersData] = useState({
    members: [],
    loading: false,
    error: null,
    totalPages: 1,
  });
  const navigate = useNavigate();

  const handleSearch = (orgName: string) => {
    setOrganization(orgName);
    localStorage.setItem("organization", orgName);
    setPage(1);
  };

  useEffect(() => {
    const loadMembersData = async () => {
      setMembersData((prev) => ({ ...prev, loading: true }));

      try {
        const { members, total } = await fetchMembersData(organization, page);
        setMembersData({
          members,
          loading: false,
          error: null,
          totalPages: Math.ceil(total / 10),
        });
      } catch {
        setMembersData((prev) => ({
          ...prev,
          members: [],
          loading: false,
          error: "Error al cargar los miembros",
        }));
      }
    };

    loadMembersData();
  }, [organization, page]);

  return (
    <div className="list-container">
      <button onClick={() => navigate("/home")}>Ir a Home</button>
      <h2 className="list-title">Miembros de {organization}</h2>
      <SearchBar onSearch={handleSearch} placeholder="Buscar miembros" />

      <Pagination
        count={membersData.totalPages}
        page={page}
        onChange={(_, value) => setPage(value)}
        color="primary"
        className="pagination"
      />

      {membersData.error && <div className="error-message">{membersData.error}</div>}
      {membersData.loading && <div className="loading-message">Cargando miembros...</div>}

      {!membersData.loading && membersData.members.length > 0 && (
        <TableContainer component={Paper} className="table-container">
          <Table className="custom-table">
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {membersData.members.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {!membersData.loading && membersData.members.length === 0 && !membersData.error && (
        <div className="no-members-message">No se encontraron miembros.</div>
      )}
    </div>
  );
};
