import styles from './ProjectsCard.module.css';

const projects = [
   {id: 0, name: `Expenses-Tracker`, link: `https://harrysiv.github.io/expenses-chart/`, description: `A small application for users to input and track their expenses year by year.`},
   {id: 1, name: `Star Wars Ships`, link: `https://harrysiv.github.io/swships/`, description: `An app that fetches Star Wars ship info and displays it.`},
   {id: 2, name: `Students`, link: `https://harrysiv.github.io/fetchstudents-app/`, description: `An app that fetches a list of students and displays them.`},
   {id: 3, name: `Jokes`, link: `https://harrysiv.github.io/jokes/`, description: `An app that fetches a random joke and displays it.`},
   {id: 4, name: `D&D`, link: `none`, description: `An app that creates a character and allows the user to fight an enemy, text-rpg style.`},
];



const ProjectsCard = () => {



   return (
      <div className={styles.projCard}>
         {projects.map(project => (
            <a className={styles.card} href={project.link}>
               <div className={styles.topCard}>
                  <h2 className={styles.projName}>{project.name}</h2>
               </div>
               <hr />
               <h6 id={`${project.id}`} >{project.description}</h6>
            </a>
         ))}
      </div>
   );

}

export default ProjectsCard;