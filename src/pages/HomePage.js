import About from "../components/About";
import Carousel from "../components/Carousel";
import NewCollection from "../components/NewCollection";
import Services from "../components/Services";
import "../styles/navbar.css";

function HomePage() {
  return (
    <div>
      <Carousel />
      <NewCollection />
      <Services />
      <About />
    </div>
  );
}

export default HomePage;
