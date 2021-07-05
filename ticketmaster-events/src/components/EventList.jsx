import React, { useState, useEffect } from "react";

const EventList = ({ searchTerm }) => {
  const [events, setEvents] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("serchTerm changed,fetching newEvent...");
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchTerm}&apikey=7L2L71HQFMHwagsyDn90II4zoDaaIC8H#`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data._embedded.events);

        setEvents(data._embedded.events);
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (isloading) return <p>Loading...</p>;
  return (
    <div className="event-list">
      <ul className="container">
        {events.map(({ id, name, images, dates }) => {
          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>{dates.start.localDate}</p>
              <img
                className="event-img"
                src={images[0].url}
                alt={`${name} cover`}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventList;
