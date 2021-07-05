import React from "react";

const header = ({ searchTerm }) => {
  return (
    <div>
      <h1>Ticketmaster events for: {searchTerm}</h1>
    </div>
  );
};

export default header;
