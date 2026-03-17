import Navbar from "../components/Navbar/Navbar";
import BlogIntro from "../components/BlogIntro/BlogIntro";
import Footer from "../components/Footer/Footer";
import BlogCards from "../components/BlogCards/BlogCards";

function Blog() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <BlogIntro />
        <BlogCards />
      </main>

      <Footer />
    </div>
  );
}

export default Blog;