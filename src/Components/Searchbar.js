function Searchbar() {
  return (
    <div>
       <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button type="submit" className="search-button">🔍</button>
    </div>
    </div>
  );
}

export default Searchbar;