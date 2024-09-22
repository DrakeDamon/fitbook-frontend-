import { useState } from "react";

function Searchbar({ setSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); 
    setSearch(e.target.value); 
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSearch(searchTerm)
  };

  return (
    <div>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Fitbook Activity Dashboard"
            className="search-input"
            value={searchTerm}
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
