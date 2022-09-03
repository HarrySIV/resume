import ProjectsCard from './projectscard/ProjectsCard';
const Projects = () => {
  return (
    <section className="altcontainer">
      <div className="projects">
        <h2 className="pageTitle">Example Projects</h2>
        <ProjectsCard />
        <div className="langPadding">
          <h2 className="projLang">
            Languages: JavaScript, HTML, CSS, Typescript
          </h2>
          <h2 className="projLang">
            Libraries/Frameworks: React w/ Hooks & Routing, Node, Express,
            Mongoose
          </h2>
          <h2 className="projLang">
            Technologies/Databases: MongoDB, mySQL, Postman, Git/GitHub, SASS,
            Font Awesome
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
