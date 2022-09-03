import './styles/_app.scss';
import Projects from './components/Projects';
import Form from './components/Form';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="body">
      <img
        src="assets\images\iceberg.jpg"
        alt="a nice iceberg"
        className="background-image"
      />
      <header className="header">
        <h1 id="mainTitle">HARRY SANDERS IV</h1>
        <p>
          <em>
            Software Engineer
            <br />
            Daytona State College
          </em>
        </p>
      </header>
      <hr />
      <main>
        <Projects />
        <hr />
        <Contact />
        <section className="projects_card">
          <Form />
        </section>
      </main>
      <p className="copyright">© 2022 Harry Sanders.</p>
    </div>
  );
};

export default App;
