import React from "react";

function Search({ searchValue, setSearchValue }) {

  function handleChange(e) {
    setSearchValue(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
