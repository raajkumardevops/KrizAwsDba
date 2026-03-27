import Navbar from "../components/Navbar/Navbar";
import BlogIntro from "../components/BlogIntro/BlogIntro";
import Footer from "../components/Footer/Footer";
import BlogCards from "../components/BlogCards/BlogCards";
import blogs from "../data/blogs"; // ✅ IMPORT DATA
import { Helmet } from "react-helmet-async";

function Blog() {
  return (
    <div className="d-flex flex-column min-vh-100">

      {/* 🔥 SEO */}
      <Helmet>
        <title>Blog | AWS, SQL Server & DBA Insights</title>

        <meta
          name="description"
          content="Read insights on AWS architecture, SQL Server performance, database security, cost optimization, and AI in enterprise systems."
        />

        <link rel="canonical" href="https://krizawsdba.com/blog" />
      </Helmet>

      <Navbar />

      <main className="flex-grow-1">

        <BlogIntro />

        {/* ✅ PASS DATA TO COMPONENT */}
        <BlogCards blogs={blogs} />

      </main>

      <Footer />

    </div>
  );
}

export default Blog;