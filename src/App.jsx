import Navbar from "./components/navbar";
import Contact from "./views/contact";
import Hero from "./views/hero";
import Skills from "./views/skills";
import Work from "./views/projects";
import Initiatives from "./views/workex";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <Hero />
      <Initiatives />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
