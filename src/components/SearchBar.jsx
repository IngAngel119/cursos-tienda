import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
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


