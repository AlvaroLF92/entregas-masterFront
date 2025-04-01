import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Container } from "@mui/material";
import "./HomePage.css";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

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
        <Typography variant="h4" gutterBottom align="inherit">
          Bienvenido a Home
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
