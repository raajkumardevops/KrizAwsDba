import Navbar from "../components/Navbar/Navbar";
import ExpertiseIntro from "../components/ExpertiseIntro/ExpertiseIntro";
import Footer from "../components/Footer/Footer";
import ExpertiseCards from "../components/ExpertiseCards/ExpertiseCards";
// import Awards from "../components/Awards/Awards";
import Timeline from "../components/Timeline/Timeline";
import Certifications from "../components/Certifications/Certifications";
import { Helmet } from "react-helmet-async";

function Expertise() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* 🔥 SEO */}
      <Helmet>
        <title>Expertise | AWS Architect & SQL Server DBA Skills</title>

        <meta
          name="description"
          content="Explore expertise in AWS cloud architecture, SQL Server database management, high availability systems, performance optimization, and enterprise solutions."
        />

        <link rel="canonical" href="https://krizawsdba.com/expertise" />
      </Helmet>

      <Navbar />

      <main className="flex-grow-1">
        <ExpertiseIntro />
        <ExpertiseCards />
        {/* <Awards /> */}
        <Timeline />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}

export default Expertise;