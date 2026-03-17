import Navbar from "../components/Navbar/Navbar";
import ContactIntro from "../components/ContactIntro/ContactIntro";
import Footer from "../components/Footer/Footer";
import ContactCards from "../components/ContactCards/ContactCards";


function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100">
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