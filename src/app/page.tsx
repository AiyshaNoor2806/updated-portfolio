import Header from "./components/Header";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import ProfessionalExperience from "./components/ProfessionalExpereince";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <h1 className="styles.welcomeHeading">Welcome to My Portfolio</h1>
      <Header />
      <Resume />
      <Skills />
      <ProfessionalExperience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
