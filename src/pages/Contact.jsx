import Navbar from "../components/Navbar/Navbar";
import ContactIntro from "../components/ContactIntro/ContactIntro";
import Footer from "../components/Footer/Footer";
import ContactCards from "../components/ContactCards/ContactCards";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* 🔥 SEO */}
      <Helmet>
        <title>Contact | Krishnan Thiruvengadam - AWS DBA Architect</title>

        <meta
          name="description"
          content="Contact Krishnan Thiruvengadam, Senior DBA and AWS Architect for enterprise database solutions, cloud architecture, and consulting services."
        />

        <link rel="canonical" href="https://krizawsdba.com/contact" />
      </Helmet>

      <Navbar />

      <main className="flex-grow-1">
        <ContactIntro />
        <ContactCards />
      </main>

      <Footer />
    </div>
  );
}

export default Contact;