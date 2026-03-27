import { FaAws, FaDatabase, FaServer, FaChartLine, FaRobot } from "react-icons/fa";
import "./BlogPreview.css";

function BlogPreview() {
  return (
    <section className="container py-5 blog-preview-section">
      
      <h2 className="blog-title text-center mb-5" data-aos="fade-up">
        KrizAWSDBA <span className="text-primary">Skills</span>
      </h2>

      <div className="row g-4 justify-content-center">

        {/* AWS */}
        <div
          className="col-lg-4 col-md-6 col-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="card blog-card p-4 h-100 text-center">
            <div className="mb-3 blog-icon">
              <FaAws size={42} className="text-primary" />
            </div>
            <h5>AWS Cloud Architecture</h5>
          </div>
        </div>

        {/* DATABASE */}
        <div
          className="col-lg-4 col-md-6 col-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="card blog-card p-4 h-100 text-center">
            <div className="mb-3 blog-icon">
              <FaDatabase size={42} className="text-primary" />
            </div>
            <h5>SQL Server & Database Management</h5>
          </div>
        </div>

        {/* HA/DR */}
        <div
          className="col-lg-4 col-md-6 col-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="card blog-card p-4 h-100 text-center">
            <div className="mb-3 blog-icon">
              <FaServer size={42} className="text-primary" />
            </div>
            <h5>High Availability & Disaster Recovery</h5>
          </div>
        </div>

        {/* PERFORMANCE */}
        <div
          className="col-lg-4 col-md-6 col-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="card blog-card p-4 h-100 text-center">
            <div className="mb-3 blog-icon">
              <FaChartLine size={42} className="text-primary" />
            </div>
            <h5>Performance Optimization</h5>
          </div>
        </div>

        {/* AI */}
        <div
          className="col-lg-4 col-md-6 col-12"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="card blog-card p-4 h-100 text-center">
            <div className="mb-3 blog-icon">
              <FaRobot size={42} className="text-primary" />
            </div>
            <h5>AI & Data Engineering</h5>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BlogPreview;