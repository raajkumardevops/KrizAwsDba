import "./BlogCards.css";
import { FaAws, FaDatabase, FaRobot } from "react-icons/fa";

function BlogCards() {
  const blogs = [
    {
      icon: <FaAws size={28} className="text-primary" />,
      title: "AWS Cost Optimization in Enterprise Systems",
      desc: "Strategies to reduce cloud infrastructure cost while maintaining enterprise resilience."
    },
    {
      icon: <FaDatabase size={28} className="text-primary" />,
      title: "Database Security for Banking Platforms",
      desc: "Security practices for highly regulated financial systems and mission-critical databases."
    },
    {
      icon: <FaRobot size={28} className="text-primary" />,
      title: "AI in Financial Data Architecture",
      desc: "Modern approaches for integrating AI into enterprise banking data ecosystems."
    }
  ];

  return (
    <section className="blog-cards-section py-5">
      <div className="container">

        <div className="row g-4">

          {blogs.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="blog-card text-center">

                <div className="blog-icon-wrapper">
                  {item.icon}
                </div>

                <h5>{item.title}</h5>
                <p>{item.desc}</p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default BlogCards;