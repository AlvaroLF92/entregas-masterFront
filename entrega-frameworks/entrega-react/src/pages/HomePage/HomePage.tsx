import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Container } from "@mui/material";
import "./HomePage.css";
import { useAuth } from "../../context/AuthContext/AuthContext";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="logout-button">
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </div>

        <Typography variant="h5" gutterBottom align="inherit">
          Bienvenido a Home , {user || "Invitado"}
        </Typography>

        <div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginBottom: 2 }}
            onClick={() => navigate("/list")}
          >
            Ir a ListPage
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate("/rickandmorty")}
          >
            Ir a RickAndMortyPage
          </Button>
        </div>
      </Box>
    </Container>
  );
};
