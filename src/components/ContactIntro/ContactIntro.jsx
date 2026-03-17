import "./ContactIntro.css";

function ContactIntro() {
  return (
    <section className="contact-intro-section py-5">
      <div className="container text-center">

        <h2
          className="fw-bold mb-3"
          data-aos="fade-up"
        >
          Let’s Connect
        </h2>

        <p
          className="text-muted lead mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Open for cloud architecture consulting, enterprise transformation,
          and technical discussions.
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