import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Actualiza el estado con lo que el usuario escribe
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar cursos..."
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;


