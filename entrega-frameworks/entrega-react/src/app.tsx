import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ListPage } from "./pages/ListPage/ListPage";
import { DetailCharacterPage } from "./pages/DetailCharacterPage/DetailCharacterPage";
import { RickAndMortyPage } from "./pages/RickAndMortyPage/RickAndMortyPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { DetailMemberPage } from "./pages/DetailMemberPage/DetailMemberPage";
import { AuthProvider } from "./context/AuthContext/AuthContext";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/rickandmorty" element={<RickAndMortyPage />} />
          <Route
            path="/detail-character/:id"
            element={<DetailCharacterPage />}
          />
          <Route
            path="/detail-member/:id/:login"
            element={<DetailMemberPage />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
