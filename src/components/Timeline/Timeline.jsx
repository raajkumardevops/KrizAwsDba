import "./Timeline.css";

function Timeline() {
  const timeline = [
    {
      company: "Tata Consultancy Services",
      location: "Sydney, Australia",
      role: "Senior DBA Technical Lead + AWS Architect & AI"
    },
    {
      company: "IBM",
      location: "India",
      role: "Microsoft SQL DBA"
    }
  ];

  return (
    <section className="timeline-section py-5">
      <div className="container">

        <div className="timeline-heading text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Experience Timeline</h2>
          <p className="text-muted">
            Career progression across enterprise technology leadership.
          </p>
        </div>

        <div className="timeline-wrapper">

          {timeline.map((item, index) => (
            <div
              className="timeline-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <h5>{item.company}</h5>
                <p className="timeline-location">{item.location}</p>
                <p>{item.role}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Timeline;