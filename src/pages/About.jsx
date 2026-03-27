import Navbar from "../components/Navbar/Navbar";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import Footer from "../components/Footer/Footer";
import SummaryCards from "../components/SummaryCards/SummaryCards";
import GlobalImpact from "../components/GlobalImpact/GlobalImpact";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>About | Krishnan Thiruvengadam - Senior DBA & AWS Architect</title>

        <meta
          name="description"
          content="Learn about Krishnan Thiruvengadam, a Senior DBA and AWS Architect with 15+ years of experience in enterprise systems, cloud platforms, and database engineering."
        />

        <link rel="canonical" href="https://krizawsdba.com/about" />
      </Helmet>

      <Navbar />
      <AboutIntro />
      <SummaryCards />
      <GlobalImpact />
      <Footer />
    </>
  );
}

export default About;