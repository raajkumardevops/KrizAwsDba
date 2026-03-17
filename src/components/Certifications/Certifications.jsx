import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certs = [
    "AWS Solution Architect Professional",
    "Microsoft DP-300",
    "MCTS SQL Server"
  ];

  return (
    <section className="certifications-section py-5">
      <div className="container">

        <div className="certifications-heading text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Certifications</h2>
          <p className="text-muted">
            Recognized credentials across cloud and enterprise platforms.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {certs.map((cert, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="cert-card text-center">

                <div className="cert-icon-wrapper">
                  <FaCertificate size={28} className="text-primary" />
                </div>

                <h5>{cert}</h5>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;