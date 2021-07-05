import React, { useState } from "react";

const EventList = ({ searchTerm }) => {
  const [events, setEvents] = useState([]);
  return (
    <div>
      <ul>
        {events.map(({ _embedded, id, name, locale, images }) => {
          return (
            <li key={id}>
              <h2>{_embedded.events.name}</h2>
              <p>{_embedded.events.locale}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventList;
