import React from "react";

const header = ({ searchTerm }) => {
  return (
    <div className="header-section">
      <h1>Ticketmaster Events For {searchTerm}</h1>
    </div>
  );
};

export default header;
