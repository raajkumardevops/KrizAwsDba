import "./ExpertiseCards.css";
import {
  FaAws,
  FaDatabase,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaBolt
} from "react-icons/fa";

function ExpertiseCards() {
  const expertise = [
    {
      icon: <FaAws size={30} className="text-primary" />,
      title: "AWS Cloud Architecture",
      desc: "Cloud migration, AWS design, hybrid enterprise systems."
    },
    {
      icon: <FaDatabase size={30} className="text-primary" />,
      title: "Database Engineering",
      desc: "SQL Server, AlwaysOn, clustering, resilience."
    },
    {
      icon: <FaRobot size={30} className="text-primary" />,
      title: "AI & Data Platforms",
      desc: "Analytics pipelines, AI modernization, data platforms."
    },
    {
      icon: <FaShieldAlt size={30} className="text-primary" />,
      title: "Security & Compliance",
      desc: "Encryption, auditing, banking compliance."
    },
    {
      icon: <FaChartLine size={30} className="text-primary" />,
      title: "Cost Optimization",
      desc: "Delivered 1.2M AUD cloud savings."
    },
    {
      icon: <FaBolt size={30} className="text-primary" />,
      title: "Performance Tuning",
      desc: "Indexing, execution plans, query optimization."
    }
  ];

  return (
    <section className="expertise-cards-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">

          {expertise.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="expertise-card text-center">

                <div className="expertise-icon-wrapper">
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

export default ExpertiseCards;