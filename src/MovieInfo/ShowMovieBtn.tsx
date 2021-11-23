import React, { useState } from 'react'; 
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

const ShowMovieBtn = ({ ships }: { ships: ShipData}) => {
   //set movieToggle for btn
const [movieToggleBtn, setMovieToggleBtn] = useState(false);

const toggleBtnHandler = () => {
   //add btn and containers, handle container and inner btn text onClick
   const btn = document.getElementById(`${ships.edited}tglBtn`);
   const moviePage = document.getElementById(`${ships.created}_movies`)
   
   if(!movieToggleBtn && moviePage !== null && btn !== null) {
      setMovieToggleBtn(true);
      moviePage.style.display = 'inline-block';
      btn.innerHTML = "x";
   } else if (movieToggleBtn  && moviePage !== null && btn !== null) {
      setMovieToggleBtn(false);
      moviePage.style.display = 'none';
      btn.innerHTML = "+";
   } else return;
}

return (
   <button
   className={styles.movieBtn} 
   onClick={toggleBtnHandler} 
   id={`${ships.edited}tglBtn`}>+</button>
)

}

export default ShowMovieBtn;