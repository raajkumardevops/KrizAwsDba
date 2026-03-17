import "./ContactCards.css";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

function ContactCards() {
  const contacts = [
    {
      icon: <FaEnvelope size={28} className="text-primary" />,
      title: "Email",
      value: "kriz1111@gmail.com",
      link: "mailto:kriz1111@gmail.com"
    },
    {
      icon: <FaLinkedin size={28} className="text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/krishnan-thiruvengadam",
      link: "https://linkedin.com/in/krishnan-thiruvengadam-598258186/"
    },
    {
      icon: <FaPhoneAlt size={28} className="text-primary" />,
      title: "Phone",
      value: "+61 406 111 488",
      link: "tel:+61406111488"
    }
  ];

  return (
    <section className="contact-cards-section py-5">
      <div className="container">

        <div className="row g-4">

          {contacts.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <a
                href={item.link}
                target={item.title === "LinkedIn" ? "_blank" : ""}
                rel="noreferrer"
                className="contact-card-link"
              >
                <div className="contact-card text-center">

                  <div className="contact-icon-wrapper">
                    {item.icon}
                  </div>

                  <h5>{item.title}</h5>
                  <p>{item.value}</p>

                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ContactCards;