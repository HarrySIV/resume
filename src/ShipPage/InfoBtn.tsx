import React, { useState } from 'react';
import styles from './InfoBtn.module.css';

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


const InfoBtn = ({ ships }: {ships: ShipData}) => {
   //set isClickedState for btn
const [isClicked, setIsClicked] = useState(false);

   //Add btn and containers, handle btn clicks to change container size
   const infoBtnClickHandler = () => {
    const  btn = document.getElementById(`${ships.edited}btn`);
    const container = document.getElementById(`${ships.edited}`);

      //If check to size up or down on btn click
      if (!isClicked && container !== null && btn !== null) {
        container.style.height = "24rem"; 
        container.scrollIntoView({behavior: 'smooth'});
        btn.innerHTML = "Close Ship Info";
        setIsClicked(true);
     } else if (isClicked && container !== null && btn !== null) {
       container.style.height = "17.45rem";
       btn.innerHTML = "Show Ship Info";
       setIsClicked(false);
     } else return;
   }

   return (
      <button className={styles.showInfo} onClick={infoBtnClickHandler} id={`${ships.edited}btn`}>Show Ship Info</button>
   )
}

export default InfoBtn;