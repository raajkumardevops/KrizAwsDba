import { ReactTyped } from "react-typed";
import "./Hero.css";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/dashboard_img.avif";

function Hero() {
  return (
    <section className="hero-section container py-5">
      <div className="row align-items-center hero-row">

        <div
          className="col-lg-6 hero-left hero-content"
          data-aos="fade-right"
          data-aos-delay="150"
        >

          <h1 className="fw-bold hero-title">KrizAWSDBA</h1>

          <h3 className="text-primary hero-subtitle mb-4">
            <ReactTyped
              strings={["Senior DBA", "AWS Architect – AI"]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1500}
              loop
            />
          </h3>

          <p
            className="lead text-muted hero-description"
            data-aos="fade-right"
          >
            Architecting secure cloud, database, and AI platforms for enterprise-scale financial systems.
          </p>

          <div
            className="hero-buttons mt-4"
            data-aos="fade-right"
            data-aos-delay="250"
          >

            <Link
              to="/expertise"
              className="custom-primary-btn text-decoration-none"
            >
              Explore Expertise
            </Link>

            <Link
              to="/contact"
              className="custom-outline-btn text-decoration-none"
            >
              Contact Now
            </Link>

          </div>

          <div
            className="hero-meta mt-4 text-muted hero-stats"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            15+ Years Experience | AWS Certified | Global Enterprise Delivery
          </div>

        </div>

        <div
          className="col-lg-6 text-center hero-right mt-4 mt-lg-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src={HeroImage}
            alt="cloud dashboard"
            className="img-fluid rounded shadow hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;