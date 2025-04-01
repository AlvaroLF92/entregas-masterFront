import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./SearchBar.css";
import { SearchBarProps } from "../../model";



export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Buscar..." }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <TextField
        label={placeholder}
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Buscar
      </Button>
    </div>
  );
};
