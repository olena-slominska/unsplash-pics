import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value.trim());
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="term">Type in a search word and press <span>Enter</span> to start searching:</label>
        <input id="term" type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
