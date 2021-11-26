import {  useState } from 'react';
import styles from './Jokes.module.css';

const Jokes = () => {
   const [joke, setJoke] = useState('Click the Button to get a Joke!');

   async function generateJoke() {
      const config = {
         headers: {
            'Accept': 'application/json'
         },
      }
      const res = await fetch('https://icanhazdadjoke.com/', config)
      const data = await res.json();
      setJoke(data.joke);
   }

   return (
      <div className={styles.body}>
         <div className={styles.container}>
            <h3>Jokes for days</h3>
            <h2 id="joke" className={styles.joke}>{joke}</h2>
            <button id={styles.jokeBtn} className={styles.btn} onClick={generateJoke}>Get A Joke</button>
         </div>
      </div>
   )

}

export default Jokes;