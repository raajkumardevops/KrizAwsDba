import { FaAws, FaDatabase } from "react-icons/fa";
import { MdOutlineMemory } from "react-icons/md";

function BlogPreview() {
  return (
    <section className="container py-5">
      <h2 className="blog-title text-center mb-5" data-aos="fade-up">
          KrizAWSDBA <span className="text-primary">Insights</span>
      </h2>

      <div className="row g-4">

        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
          <div className="card p-4 h-100 text-center">
            <div className="mb-3">
              <FaAws size={42} className="text-primary" />
            </div>
            <h5>AWS Cost Optimization in Enterprise Systems</h5>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
          <div className="card p-4 h-100 text-center">
            <div className="mb-3">
              <FaDatabase size={42} className="text-primary" />
            </div>
            <h5>Database Security for Banking Platforms</h5>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
          <div className="card p-4 h-100 text-center">
            <div className="mb-3">
              <MdOutlineMemory size={42} className="text-primary" />
            </div>
            <h5>AI in Financial Data Architecture</h5>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BlogPreview;