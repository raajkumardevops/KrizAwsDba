import "./ContactIntro.css";

function ContactIntro() {
  return (
    <section className="contact-intro-section py-5">
      <div className="container text-center">

        <h2
          className="fw-bold contact-main-title mb-3"
          data-aos="fade-up"
        >
          Let’s Connect
        </h2>

        <p
          className="text-muted lead contact-lead mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get in touch with Krishnan Thiruvengadam, Whether you’re looking for database optimization, cloud transformation, or AI-driven solutions, Krishnan is available to collaborate and deliver scalable, secure, and high-performance systems tailored to your business needs.
        </p>

        <p
          className="contact-intro-text mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Whether discussing enterprise cloud strategy, database modernization,
          AI integration, or technical collaboration, feel free to connect.
        </p>

      </div>
    </section>
  );
}

export default ContactIntro;