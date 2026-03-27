import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import blogs from "../data/blogs";
import "./BlogDetails.css";
import { Helmet } from "react-helmet-async";

function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h2 className="text-center mt-5">Blog not found</h2>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* 🔥 DYNAMIC SEO */}
      <Helmet>
        <title>{blog.title} | KrizAWSDBA</title>

        <meta
          name="description"
          content={blog.description}
        />

        <link
          rel="canonical"
          href={`https://krizawsdba.com/blog/${blog.slug}`}
        />

        {/* 🔥 OPEN GRAPH (VERY IMPORTANT) */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://krizawsdba.com/blog/${blog.slug}`}
        />

        {/* 🔥 STRUCTURED DATA (BIG BOOST) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${blog.title}",
            "description": "${blog.description}",
            "author": {
              "@type": "Person",
              "name": "Krishnan Thiruvengadam"
            },
            "publisher": {
              "@type": "Organization",
              "name": "KrizAWSDBA"
            }
          }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="blog-details-container flex-grow-1">

        <div className="container" data-aos="fade-down" data-aos-delay="200">

          {/* 🔙 BACK BUTTON */}
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          {/* 🧠 TITLE */}
          <h1 className="blog-title" data-aos="fade-right" data-aos-delay="200">
            {blog.title}
          </h1>

          {/* META */}
          <p className="blog-meta">
            By Krishnan Thiruvengadam • AWS Architect & DBA
          </p>

          {/* 📖 CONTENT */}
          <div className="blog-content" data-aos="fade-down" data-aos-delay="300">
            {blog.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default BlogDetails;