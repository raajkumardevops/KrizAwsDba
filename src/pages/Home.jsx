import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BlogPreview from "../components/BlogPreview/BlogPreview";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>Krishnan Thiruvengadam | Senior DBA & AWS Architect</title>

        <meta
          name="description"
          content="Krishnan Thiruvengadam is a Senior DBA and AWS Architect with 15+ years experience in SQL Server, cloud architecture, and enterprise database systems."
        />

        {/* 🔥 IMPORTANT */}
        <link rel="canonical" href="https://krizawsdba.com/" />
      </Helmet>

      <Navbar />
      <Hero />
      <BlogPreview />
      <Footer />
    </>
  );
}

export default Home;