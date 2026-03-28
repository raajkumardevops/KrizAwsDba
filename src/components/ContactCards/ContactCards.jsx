import "./ContactCards.css";
import { FaEnvelope, FaLinkedin, FaCopy } from "react-icons/fa";

function ContactCards() {

  const contacts = [
    {
      icon: <FaEnvelope size={28} className="text-primary" />,
      title: "Email",
      value: "kriz1111@gmail.com",
      type: "email"
    },
    {
      icon: <FaLinkedin size={28} className="text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/krishnan-thiruvengadam",
      link: "https://linkedin.com/in/krishnan-thiruvengadam-598258186/",
      type: "external"
    }
  ];

  // 🔥 Detect Mobile Device
  const isMobile = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const handleClick = (item) => {
    if (item.type === "email") {

      if (isMobile()) {
        // 📱 Mobile → open mail app
        window.location.href = `mailto:${item.value}`;
      } else {
        // 💻 Desktop → open Gmail compose
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${item.value}`,
          "_blank",
          "noopener,noreferrer"
        );
      }

    } else {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleCopy = (text, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    alert("Email copied!");
  };

  return (
    <section className="contact-cards-section py-5">
      <div className="container">

        <div className="row g-4 justify-content-center">

          {contacts.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="contact-card text-center contact-card-link"
                onClick={() => handleClick(item)}
              >

                <div className="contact-icon-wrapper">
                  {item.icon}
                </div>

                <h5>{item.title}</h5>

                <p className="contact-value">
                  {item.value}
                </p>

                {/* 🔥 Copy button */}
                {item.type === "email" && (
                  <button
                    className="copy-btn"
                    onClick={(e) => handleCopy(item.value, e)}
                  >
                    <FaCopy size={14} /> Copy
                  </button>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ContactCards;