import "./BlogIntro.css";

function BlogIntro() {
  return (
    <section className="blog-intro-section py-5">
      <div className="container text-center">

        <h2 className="blog-title text-center mb-4" data-aos="fade-up">
          KrizAWSDBA <span className="text-primary">Insights</span>
        </h2>

        <p
          className="blog-lead text-muted mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Krishnan Thiruvengadam has experienced in cloud architecture, SQL Server, database modernization, and AI-driven enterprise systems. His expertise spans large-scale financial platforms, cloud transformation strategies, and intelligent data solutions that drive business performance and innovation.
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