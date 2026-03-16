import Navbar from "../components/Navbar/Navbar";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import Footer from "../components/Footer/Footer";
import SummaryCards from "../components/SummaryCards/SummaryCards";
import GlobalImpact from "../components/GlobalImpact/GlobalImpact";

function About() {
  return (
    <>
      <Navbar />
      <AboutIntro />
      <SummaryCards />
      <GlobalImpact />
      <Footer />
    </>
  );
}

export default About;