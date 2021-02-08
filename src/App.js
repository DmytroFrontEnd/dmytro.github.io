import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FirstScreen from "./Components/FirstScreen/FirstScreen";
import NavBar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FirstScreen />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
