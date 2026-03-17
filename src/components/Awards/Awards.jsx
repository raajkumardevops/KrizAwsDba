import "./Awards.css";
import { FaAward } from "react-icons/fa";

function Awards() {
  const awards = [
    {
      title: "Blue Miles Award",
      desc: "Recognized for automating migration of multiple enterprise databases."
    },
    {
      title: "Infrastructure Migration Recognition",
      desc: "Appreciated for successful infrastructure database migration."
    },
    {
      title: "Night Watch Award",
      desc: "Awarded for scalable interfund hypercare technical excellence."
    }
  ];

  return (
    <section className="awards-section py-5">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Awards & Recognition</h2>
          <p className="text-muted">
            Key achievements earned across enterprise delivery programs.
          </p>
        </div>

        <div className="row g-4">

          {awards.map((award, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="award-card text-center">

                <div className="award-icon-wrapper">
                  <FaAward size={28} className="text-primary" />
                </div>

                <h5>{award.title}</h5>
                <p>{award.desc}</p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Awards;