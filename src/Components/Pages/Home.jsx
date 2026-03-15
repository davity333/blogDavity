import Hero from "../Organism/Hero";
import Tecnologias from "../Organism/Tecnologias";
import SobreMi from "../Organism/SobreMi";
import Proyectos from "../Organism/Proyectos";
import Experiencia from "../Organism/Experiencia";
import Blog from "../Organism/Blog";
import Contacto from "../Organism/Contacto";
import Footer from "../Organism/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Tecnologias />
      <SobreMi />
      <Proyectos />
      <Experiencia />
      <Blog />
      <Contacto />
      <Footer />
    </>
  );
}