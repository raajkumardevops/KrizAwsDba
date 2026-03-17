import Navbar from "../Components/Navbar/Navbar";
import ExpertiseIntro from "../Components/ExpertiseIntro/ExpertiseIntro";
import Footer from "../Components/Footer/Footer";
import ExpertiseCards from "../Components/ExpertiseCards/ExpertiseCards";
import Awards from "../Components/Awards/Awards";
import Timeline from "../Components/Timeline/Timeline";
import Certifications from "../Components/Certifications/Certifications";

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