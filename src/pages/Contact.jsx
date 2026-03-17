import Navbar from "../Components/Navbar/Navbar";
import ContactIntro from "../Components/ContactIntro/ContactIntro";
import Footer from "../Components/Footer/Footer";
import ContactCards from "../Components/ContactCards/ContactCards";


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