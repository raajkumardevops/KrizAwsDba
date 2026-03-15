import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BlogPreview from "../components/BlogPreview/BlogPreview";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogPreview />
      <Footer />
    </>
  );
}

export default Home;