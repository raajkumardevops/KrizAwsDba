import { ReactTyped } from "react-typed";
import "./Hero.css";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/krishna.profile.jpeg";

function Hero() {
  return (
    <section className="hero-section container">

      <div className="hero-card">

        <div className="row hero-row gx-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 hero-left" data-aos="fade-right">

            <div className="hero-left-inner">

              <h1 className="fw-bold hero-title">KrizAWSDBA</h1>

              <h3 className="text-primary hero-subtitle mb-3">
                <ReactTyped
                  strings={["Senior DBA", "AWS Architect – AI"]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                />
              </h3>

              <p className="text-muted hero-description">
                Architecting secure cloud, database, and AI platforms for enterprise-scale financial systems.
              </p>

              <div className="hero-buttons mt-4">
                <Link to="/expertise" className="custom-primary-btn text-decoration-none">
                  Explore Expertise
                </Link>

                <Link to="/contact" className="custom-outline-btn text-decoration-none">
                  Contact Now
                </Link>
              </div>

              <div className="hero-meta text-muted">
                15+ Years Experience | AWS Certified | Global Enterprise Delivery
              </div>

              <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow"></div>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 hero-right" data-aos="fade-left">
            <div className="hero-image-wrapper">
              <img src={HeroImage} alt="profile" className="hero-image" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;