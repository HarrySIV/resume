import styles from './ProjectsCard.module.css';

const projects = [
   {name: `Expenses-Tracker`, link: `https://harrysiv.github.io/expenses-chart/`, description: `A small application for users to input and track their expenses year by year.`},
   {name: `Jokes`, link: `none`, description: `An app that fetches a random joke and displays it.`},
   {name: `D&D`, link: `none`, description: `An app that creates a character and allows the user to fight an enemy text-rpg style.`},
   {name: `Star Wars Ships`, link: `https://harrysiv.github.io/swships/`, description: `An app that fetches Star Wars Ship info from an API and displays it.`},
];



const ProjectsCard = () => {


   return (
      <>
      {projects.map(project => (
         <a className={styles.card} href={project.link}>
         <div className={styles.innercard}>
            <h2>{project.name}</h2>
            <h4>{project.description}</h4>
         </div>
      </a>
      ))}
      </>
   );

}

export default ProjectsCard;