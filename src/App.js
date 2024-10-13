import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import IntroductionBar from './Components/IntroductionBar';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="App snap-y snap-mandatory">
      <NavBar />
      <IntroductionBar />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      
    </div>
  );
}

export default App;
