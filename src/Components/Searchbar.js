import { useState } from "react";

function Searchbar({ setSearch, search }) {
 

  const handleInputChange = (e) => {
    setSearch(e.target.value); 
  };




  return (
    <div>
      <div className="search-container">
        <form >
          <input
            type="text"
            placeholder="Fitbook Activity Dashboard"
            className="search-input"
            value={search}
            onChange={handleInputChange}           
          />
          <button type="submit" className="search-button">
            🔍
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
