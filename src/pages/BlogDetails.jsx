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

      {/* 🔥 SEO */}
      <Helmet>
        <title>{blog.title} | KrizAWSDBA</title>

        <meta name="description" content={blog.description} />
        <meta name="keywords" content={blog.keywords} />

        <link
          rel="canonical"
          href={`https://krizawsdba.com/blog/${blog.slug}`}
        />

        {/* OPEN GRAPH */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://krizawsdba.com/blog/${blog.slug}`}
        />
        <meta
          property="og:image"
          content={`https://krizawsdba.com/${blog.image}`}
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${blog.title}",
            "description": "${blog.description}",
            "image": "https://krizawsdba.com/${blog.image}",
            "author": {
              "@type": "Person",
              "name": "Krishnan Thiruvengadam"
            },
            "publisher": {
              "@type": "Organization",
              "name": "KrizAWSDBA"
            },
            "datePublished": "2026-03-31",
            "dateModified": "2026-03-31"
          }
          `}
        </script>
      </Helmet>

      <Navbar />

      <main className="blog-details-container flex-grow-1">

        <div className="container blog-wrapper" data-aos="fade-up">

          {/* 🔙 BACK */}
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          {/* TITLE */}
          <h1 className="blog-title">{blog.title}</h1>

          {/* META */}
          <p className="blog-meta">
            By Krishnan Thiruvengadam • AWS Architect & DBA
          </p>

          {/* IMAGE */}
          {blog.image && (
            <div className="blog-image-wrapper">
              <img
                src={`/${blog.image}`}
                alt={`${blog.title} illustration`}
                className="blog-image"
              />
            </div>
          )}

          {/* CONTENT */}
          <div className="blog-content">
            {blog.content.split("\n").map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default BlogDetails;