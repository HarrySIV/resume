import styles from './App.module.css';
import Projects from './Components/Projects';


const App = () => {
  return (
    <div className={styles.body}>
       <section className={styles.container}>
          <h1 id={styles.mainTitle}>HARRY SANDERS IV</h1> 
          <p><em>Seeking a web developer position 
             <br />Daytona State College - Associates of Arts
             <br />Udemy
             <br />Palm Coast, FL 32164
             </em>
          </p>
       </section>
       <hr />
       <Projects />
       <hr />
       <h2 className={styles.pageTitle}>Contact Me</h2>
            <ul>
               <h3>E-Mail: harry.sandersiv@yahoo.com <em> (preferred)</em></h3>
               <a href="https://github.com/HarrySIV/">GitHub</a>
            </ul>
            <section className={styles.projects_card}>
               <form action="mailto:harry.sandersiv@yahoo.com" method="post" encType="text/plain">
                  <table>
                     <tr>
                        <td><label htmlFor="name">Your Name:</label></td>
                        <td><input type="text" name="yourName" required /> </td>
                     </tr>
                     <tr>
                        <td><label htmlFor="email">E-mail:</label></td>
                        <td><input type="email" name="yourEmail" required /></td>
                     </tr>
                     <tr>
                        <td><label htmlFor="textarea">Message:</label></td>
                        <td><textarea name="yourMessage" cols={21} rows={4} /></td>
                     </tr>
                  </table>
                  <input type="submit" />
               </form>
              </section>
       <p className={styles.copyright}>© 2021 Harry Sanders.</p>
    </div>
 )
}

export default App;
