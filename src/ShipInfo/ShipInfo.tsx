import styles from './ShipInfo.module.css';

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


const ShipInfo = ({ ships }: { ships: ShipData }) => {

   return (
      <div className={styles.info_container}>
               <h5 className={styles.info_crew}>Crew: {ships.crew}</h5>
               <h5 className={styles.info_passengers}> Passengers: {ships.passengers}</h5>
               <h5 className={styles.info_cargo}>Cargo Capacity: {ships.cargo_capacity}</h5>
               <h5 className={styles.info_consum}>consumables: {ships.consumables}</h5>
      </div>
   )

}

export default ShipInfo;