import Footer from "./components/Footer";
import Services from "./components/Services";
import Process from "./components/Process";
import Opening from "./components/Opening";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Opening />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="process">
        <Process />
      </div>
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}
