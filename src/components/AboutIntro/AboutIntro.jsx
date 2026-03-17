import "./AboutIntro.css";

function AboutIntro() {
  return (
    <section className="container py-5">
      <div className="row align-items-center about-intro-section">

        <div className="col-lg-6 about-text-content" data-aos="fade-right">

          <h3 className="text-primary fw-semibold mb-3 about-label">About</h3>

          <h1
            className="about-main-title fw-bold mb-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Krishnan Thiruvengadam
          </h1>

          <p
            className="text-muted lead about-lead"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            15 years of experience delivering cloud, database, and AI transformation
            for banking and enterprise systems across Australia, USA, UK, Germany,
            Canada, and New Zealand.
          </p>

          <p
            className="text-muted about-paragraph"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Specialized in AWS cloud architecture, database modernization,
            enterprise resilience, and financial systems engineering across
            highly regulated banking and enterprise environments.
          </p>

          <p
            className="text-muted about-paragraph"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            Strong expertise in performance tuning, high availability,
            disaster recovery, cloud migration, and cost optimization,
            helping organizations modernize critical infrastructure
            while maintaining compliance and operational reliability.
          </p>

        </div>

        <div
          className="col-lg-6 text-center mt-4 mt-lg-0"
          data-aos="fade-left"
        >
          <div className="about-visual-card">

            <div
              className="metric-block"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-primary fw-bold">15+ Years</h3>
              <p>Enterprise Cloud Delivery</p>
            </div>

            <div
              className="metric-block"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h3 className="text-primary fw-bold">6 Countries</h3>
              <p>Global Transformation Experience</p>
            </div>

            <div
              className="metric-block"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <h3 className="text-primary fw-bold">1.2M AUD</h3>
              <p>Cloud Cost Optimization Delivered</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutIntro;