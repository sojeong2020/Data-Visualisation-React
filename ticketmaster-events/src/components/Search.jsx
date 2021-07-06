import React, { useState } from "react";

const Search = ({ setSearchTerm }) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");

    console.log("submitted", newSearchTerm);
  };

  return (
    <div id="overlay" className="search-section">
      <form onSubmit={handleSubmit}>
        <label className="search-label">
          Search for events at your favourite venue:
          <input
            value={newSearchTerm}
            onChange={(event) => setNewSearchTerm(event.target.value)}
          ></input>
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
