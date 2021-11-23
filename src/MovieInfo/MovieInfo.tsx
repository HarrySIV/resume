import React, { useState, useEffect } from 'react';
import styles from './MovieInfo.module.css';

type ShipData = {
   model: string,
   manufacturer: string,
   cost_in_credits: string,
   length: string;
   max_atmosphering_speed:  string, 
   crew: string, 
   passengers: string, 
   cargo_capacity: string, 
   consumables: string, 
   hyperdrive_rating: string, 
   MGLT: string, 
   starship_class: string,
   films: string[], 
   created: string, 
   edited: string, 
   url: string,
}

type MovieData = {
   title: string;
}[]


const MovieInfo = ({ ships, movies }: { ships: ShipData, movies: MovieData }) => {
   const [shipInFilm, setShipInFilm] = useState([]);

useEffect(() => {
   const getMovies = () => {
      const filmId = { films: ships.films.map( url => parseInt(url[28])) };
      for (let id of filmId.films) {
         switch (id) {
            case 1: setShipInFilm((prevMovies: MovieData) => [...prevMovie, movies[0].title]); break;
            case 2: setShipInFilm(shipInFilm.concat(movies[1].title)); break;
            case 3: setShipInFilm(shipInFilm.concat(movies[2].title)); break;
            case 4: setShipInFilm(shipInFilm.concat(movies[3].title)); break;
            case 5: setShipInFilm(shipInFilm.concat(movies[4].title)); break;
            case 6: setShipInFilm(shipInFilm.concat(movies[5].title)); break;
            default: return console.log(id);
         }
      } 
   }
   getMovies();
}, [])

   return (
      <div className={styles.movieInfo} id={`${ships.created}_movies`}>
         <h2>As Seen In: </h2>
         {shipInFilm.map(movieName => (
               <h3 className="title">{movieName}</h3> 
         ))}
      </div>
   )

}

export default MovieInfo;