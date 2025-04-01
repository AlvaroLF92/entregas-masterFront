import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FilterBarProps } from "../../model";
import './FilterBar.css';


export const FilterBar: React.FC<FilterBarProps> = ({ onFilter, placeholder = "Filtrar..." }) => {
  const [filterTerm, setFilterTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterTerm(value);
    onFilter(value);
  };

  return (
    <div className="filter-bar-container">
    <TextField
      label={placeholder}
      variant="outlined"
      value={filterTerm}
      onChange={handleChange}
      fullWidth
    />
    </div>
  );
};
