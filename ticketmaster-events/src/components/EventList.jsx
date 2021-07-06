import React, { useState, useEffect } from "react";

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
    console.log("serchTerm changed,fetching newEvent...");
    fetch(
      `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${searchTerm}&?sort=location&apikey=7L2L71HQFMHwagsyDn90II4zoDaaIC8H#`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data._embedded.venues);

        setVenues(data._embedded.venues);
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (isloading) return <p>Loading...</p>;
  return (
    <div className="event-list">
      <ul className="container">
        {venues.map(({ id, name, images ,location}) => {
          console.log(images,"images")
           if (location !== undefined && images !== undefined){
            return (
              <li key={id}>
                <h2>{name}</h2>
                <img
                  className="event-img"
                  src={images.url}
                  alt={`${name} cover`}
                ></img>
                <p>{location.latitude}, {location.longitude}</p>
                </li>
            );
           }else if( images === undefined && location === undefined )  {

            return (
              <li key={id}>
                <h2>{name}</h2>
               
                <p>location not available</p>
                </li>
            );
           }else if(images !== undefined && location === undefined){
             return (
               
             )
           }
          
        })}
      </ul>
    </div>
  );
};

export default EventList;
