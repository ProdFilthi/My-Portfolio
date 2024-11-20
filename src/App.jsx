import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <Technologies />
      <About />
    </div>
  );
};

export default App;
