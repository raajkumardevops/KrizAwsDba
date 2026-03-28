import { ReactTyped } from "react-typed";
import "./Hero.css";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/krishna.profile.jpeg";
import { useState } from "react";

function Hero() {

  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero-section container">

      <div className="hero-card">

        <div className="row hero-row gx-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 hero-left-content" data-aos="fade-right">

            <div className="hero-left-inner">

              <h1 className="hero-big-text fw-bold">
                KrizAWSDBA
              </h1>

              <h3 className="text-primary hero-subtitle">
                <ReactTyped
                  strings={["Senior DBA", "AWS Architect – AI"]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                />
              </h3>

              <p className="hero-description text-muted">
                Architecting secure cloud, database, and AI platforms for enterprise-scale financial systems.
              </p>

              <div className="hero-buttons mt-1">
                <Link to="/expertise" className="custom-primary-btn text-decoration-none">
                  Explore Expertise
                </Link>

                <Link to="/contact" className="custom-outline-btn text-decoration-none">
                  Contact Now
                </Link>
              </div>

              <div className="hero-meta text-muted mb-2">
                15+ Years Experience | AWS Certified | Global Enterprise Delivery
              </div>

              <p className="hero-description text-muted mb-5"> 
                Krishnan Thiruvengadam is a Senior DBA and AWS Architect with over 15 years of experience in SQL Server, cloud architecture, and enterprise database systems. Krishnan specializes in AWS cloud solutions, database optimization, and AI-driven data platforms.
              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 hero-right-image" data-aos="fade-left">
            <div
              className="hero-image-wrapper clickable"
              onClick={() => setShowModal(true)}
            >
              <img src={HeroImage} alt="profile" className="hero-image" />
            </div>
          </div>

        </div>

      </div>

      {/* 🔥 IMAGE MODAL */}
      {showModal && (
        <div className="image-modal" onClick={() => setShowModal(false)}>
          <img src={HeroImage} alt="full" className="modal-image" />
          <span className="close-btn">&times;</span>
        </div>
      )}

    </section>
  );
}

export default Hero;