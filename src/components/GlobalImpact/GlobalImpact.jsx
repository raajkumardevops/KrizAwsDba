import "./GlobalImpact.css";
import { FaGlobeAsia } from "react-icons/fa";

function GlobalImpact() {
  const countries = [
    "Australia",
    "USA",
    "UK",
    "Germany",
    "Canada",
    "New Zealand"
  ];

  return (
    <section className="container py-5 global-impact-section">

      <div className="global-impact-heading text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">Global Delivery Impact</h2>
        <p className="text-muted">
          International transformation experience across enterprise platforms.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {countries.map((country, index) => (
          <div
            className="col-lg-4 col-md-6 col-12"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="impact-card text-center">

              <div className="impact-icon-wrapper">
                <FaGlobeAsia size={30} className="text-primary" />
              </div>

              <h5>{country}</h5>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default GlobalImpact;