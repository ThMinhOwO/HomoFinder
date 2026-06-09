


const SearchBar = ({ searchTerm, setSearchTerm }) => 
{
  return (
    <>
    <div className="search-bar">
      <input 
      type="text" 
      placeholder="Find human" 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    </>
  )
};

export default SearchBar
