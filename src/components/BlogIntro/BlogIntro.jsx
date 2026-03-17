import "./BlogIntro.css";

function BlogIntro() {
  return (
    <section className="blog-intro-section py-5">
      <div className="container text-center">

          <h2 className="blog-title text-center mb-5" data-aos="fade-up">
          KrizAWSDBA <span className="text-primary">Insights</span>
          </h2>

        <p
          className="text-muted lead mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Cloud architecture, database modernization, AI, and enterprise transformation insights.
        </p>

        <p
          className="blog-intro-text mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Sharing enterprise perspectives across AWS architecture,
          database engineering, banking systems, and future-ready data platforms.
        </p>

      </div>
    </section>
  );
}

export default BlogIntro;