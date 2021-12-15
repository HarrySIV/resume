import ProjectsCard from './ProjectsCard/ProjectsCard';
import styles from '../App.module.css';


const Projects = () => {
   return (
      <section className={styles.altcontainer}>
         <h2 className={styles.pageTitle}>Example Projects</h2>
         <ProjectsCard />
         <div className={styles.langPadding}>
         <h2 className={styles.projLang}>Languages: JavaScript, HTML, CSS, Typescript</h2>
         <h2 className={styles.projLang}>Libraries/Frameworks: React w/ Hooks & Routing, Next, Axios, Node, Express</h2>
         </div>
      </section>
   )
}

export default Projects;