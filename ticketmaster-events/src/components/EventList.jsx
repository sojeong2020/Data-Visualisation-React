import React, { useState, useEffect } from "react";
import Location from "./Location";
const EventList = ({ searchTerm }) => {
  // const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log("serchTerm changed,fetching newEvent...");
  //   fetch(
  //     `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchTerm}&apikey=7L2L71HQFMHwagsyDn90II4zoDaaIC8H#`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data._embedded.events);

  //       setEvents(data._embedded.events);
  //       setIsLoading(false);
  //     });
  // }, [searchTerm]);

  useEffect(() => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${searchTerm}&apikey=7L2L71HQFMHwagsyDn90II4zoDaaIC8H#`
    )
      .then((response) => response.json())
      .then((data) => {
        setVenues(data._embedded.venues);
        console.log(data._embedded.venues.splice(0, 6));
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (isloading) return <p>Loading...</p>;
  return (
    <div className="event-list">
      <ul className="container leaflet-container">
        {venues.splice(0, 6).map(({ id, name, location, city }) => {
          if (location !== undefined) {
            return (
              <li className="events-details" key={id}>
                <h2>{name}</h2>
                <p>{city.name}</p>
                <div>
                  <Location location={location} id={id} />
                </div>
              </li>
            );
          } else {
            return <div></div>;
          }
        })}
      </ul>
    </div>
  );
};

export default EventList;
