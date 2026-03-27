import "./BlogCards.css";
import { Link } from "react-router-dom";
import { FaAws, FaDatabase, FaRobot } from "react-icons/fa";

function BlogCards({ blogs }) {

  // 🔥 fallback icons (based on index or category)
  const getIcon = (index) => {
    const icons = [
      <FaAws size={28} className="text-primary" />,
      <FaDatabase size={28} className="text-primary" />,
      <FaRobot size={28} className="text-primary" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section className="blog-cards-section py-5">
      <div className="container">

        <div className="row g-4 justify-content-center">

          {blogs.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="blog-card text-center">

                {/* ICON */}
                <div className="blog-icon-wrapper">
                  {getIcon(index)}
                </div>

                {/* TITLE */}
                <h5>{item.title}</h5>

                {/* DESCRIPTION */}
                <p>{item.description}</p>

                {/* 🔥 READ MORE */}
                <Link
                  to={`/blog/${item.slug}`}
                  className="blog-read-more"
                >
                  Read More →
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BlogCards;