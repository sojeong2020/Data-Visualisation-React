import React, { useState } from "react";

const Search = () => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitted", newSearchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search for events...
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
