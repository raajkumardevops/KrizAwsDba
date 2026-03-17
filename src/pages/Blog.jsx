import Navbar from "../Components/Navbar/Navbar";
import BlogIntro from "../Components/BlogIntro/BlogIntro";
import Footer from "../Components/Footer/Footer";
import BlogCards from "../Components/BlogCards/BlogCards";

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