const searchBarStyle = {
  outline: "none",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  color: "#333",
  backgroundColor: "#fff",
  width: "250px",
};

const SearchBar = (props) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    props?.onSearch(searchTerm);
  };

  return (
    <input
      type="search"
      placeholder={props?.placeHolder || "Search Here ..."}
      onChange={handleSearch}
      style={searchBarStyle}
    />
  );
};

export default SearchBar;
