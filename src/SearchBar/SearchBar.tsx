import styles from './SearchBar.module.css' ;

let SearchBar = ({ onChange }: {onChange: (event: React.ChangeEvent<HTMLInputElement>) => void} ) => {

      //capture searchBar userInput
      const userInput = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

   //create searchBar as input field
   return (
      <input className={styles.input} type="text" placeholder="Search..." onChange={userInput} />
   )
}

export default SearchBar;