import "./ExpertiseIntro.css";

function ExpertiseIntro() {
  return (
    <section className="expertise-intro-section py-5">
      <div className="container text-center">

        <h2
          className="fw-bold expertise-main-title mb-3"
          data-aos="fade-up"
        >
          Core Technical Expertise
        </h2>

        <p
          className="text-muted lead expertise-lead mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Enterprise cloud, database, security, and AI capabilities.
        </p>

        <p
          className="expertise-intro-text mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Delivering enterprise-scale architecture, performance engineering,
          secure cloud modernization, and resilient financial data systems
          across highly regulated global environments.
        </p>

      </div>
    </section>
  );
}

export default ExpertiseIntro;