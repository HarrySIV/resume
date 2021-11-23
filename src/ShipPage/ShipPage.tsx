import styles from './ShipPage.module.css';
import ShowMovieBtn from '../MovieInfo/ShowMovieBtn';

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


const ShipPage = ({ ships }: { ships: ShipData}) => {

   return (
      <div className={styles.shippage}>
               <h1 className={styles.model}>{ships.model}</h1>
               <ShowMovieBtn ships={ships} />
               <hr />
               <h3 className="shipClass">Class: {ships.starship_class}</h3>
               <h3 className="manufacturer">Manufacturer: {ships.manufacturer}</h3>
               <h3 className="hyper"> HyperDrive: {ships.hyperdrive_rating}</h3>
               <h3 className="speed">Atmo Speed: {ships.max_atmosphering_speed} kph</h3>
               <h4 className="length">Length: {ships.length} meters</h4>
               <h4 className="credits">Credits: {ships.cost_in_credits}</h4> 
      </div>
   )
}

export default ShipPage;