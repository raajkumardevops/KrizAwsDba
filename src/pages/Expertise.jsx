import Navbar from "../components/Navbar/Navbar";
import ExpertiseIntro from "../components/ExpertiseIntro/ExpertiseIntro";
import Footer from "../components/Footer/Footer";
import ExpertiseCards from "../components/ExpertiseCards/ExpertiseCards";
import Awards from "../components/Awards/Awards";
import Timeline from "../components/Timeline/Timeline";
import Certifications from "../components/Certifications/Certifications";

function Expertise() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <ExpertiseIntro />
        <ExpertiseCards />
        <Awards />
        <Timeline />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}

export default Expertise;