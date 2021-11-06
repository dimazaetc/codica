import "./search.css";
function Search({ onChange, value, onClick }) {
  return (
    <div className="search_wrapper">
      <input
        value={value}
        className="search"
        type="text"
        placeholder="Search.."
        onChange={onChange}
        onClick={onClick}
      ></input>
    </div>
  );
}
export default Search;
