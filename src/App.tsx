import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import ShipPage from './Components/ShipPage/ShipPage';
import ShipInfo from './Components/ShipInfo/ShipInfo';
import InfoBtn from './Components/ShipPage/InfoBtn';
import SearchBar from './Components/SearchBar/SearchBar';
import MovieInfo from './Components/MovieInfo/MovieInfo';


interface ShipData {
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




function App() {
  const [starships, setStarships] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [filteredStarship, setFilteredStarships] = useState([]);
  useEffect(() => {
    const fetchStarships = () => {
      fetch('https://swapi.dev/api/starships')
      .then(response => response.json())
      .then(data => setStarships(data.results));
    }
  fetchStarships();
  }, []);

  useEffect(() => {
    const fetchMovieInfo = () => {
    fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(data => setMovieList(data.results));
    }
    fetchMovieInfo();
 }, []);

  if(!starships.length) return (<h1>...</h1>);

  //setStudents to a new array of filteredStudents
  const searchQueryHandler = (text: string) => {
    if (text) {
      const searchQuery = starships.filter((newFilteredStarships: ShipData) => {
      return newFilteredStarships.model.toLowerCase().includes(text.toLowerCase());
      })
      setFilteredStarships(searchQuery);
    } else if (!text) { return setFilteredStarships(starships);}
  }

  return (
    <div className={styles.body}>
      <SearchBar onChange={searchQueryHandler} />
      {filteredStarship.map((ships: ShipData) => (
        <div className={styles.ships}>
          <div className={styles.container} key={ships.created} id={ships.edited}>
            <ShipPage ships={ships} />
            <InfoBtn ships={ships}/>
            <ShipInfo ships={ships} />
          </div>
          <MovieInfo ships={ships} movies={movieList} />
        </div>
      ))}
    </div>
  )
}
export default App;