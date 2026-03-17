import "./SummaryCards.css";
import { FaAws, FaDatabase, FaShieldAlt, FaChartLine } from "react-icons/fa";

function SummaryCards() {
  return (
    <section className="summary-section py-5">
      <div className="container">

        <div className="summary-heading text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold">Professional Highlights</h2>
          <p className="text-muted">
            Core strengths across cloud, enterprise systems, and banking transformation.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
            <div className="summary-card text-center">
              <div className="icon-wrapper">
                <FaAws size={34} className="text-primary" />
              </div>
              <h5>AWS Architecture</h5>
              <p>Cloud migration, infrastructure design, hybrid systems.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="summary-card text-center">
              <div className="icon-wrapper">
                <FaDatabase size={34} className="text-primary" />
              </div>
              <h5>Banking Systems</h5>
              <p>Mission-critical platforms, payments, lending, AML systems.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <div className="summary-card text-center">
              <div className="icon-wrapper">
                <FaShieldAlt size={34} className="text-primary" />
              </div>
              <h5>SQL Server HA/DR</h5>
              <p>AlwaysOn, failover clustering, disaster recovery readiness.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
            <div className="summary-card text-center">
              <div className="icon-wrapper">
                <FaChartLine size={34} className="text-primary" />
              </div>
              <h5>Cost Optimization</h5>
              <p>Delivered 1.2M AUD infrastructure savings.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SummaryCards;