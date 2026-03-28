import "./Footer.css";
import { FaCopy } from "react-icons/fa";

function Footer() {

  // 🔥 Detect Mobile
  const isMobile = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  // 🔥 Handle Email Click
  const handleEmailClick = (e) => {
    e.preventDefault();

    const email = "kriz1111@gmail.com";

    if (isMobile()) {
      // 📱 Mobile → open mail app
      window.location.href = `mailto:${email}`;
    } else {
      // 💻 Desktop → open Gmail
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  // 🔥 Copy Email
  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("kriz1111@gmail.com");
    alert("Email copied!");
  };

  return (
    <footer className="custom-footer">

      <div className="container footer-container">

        <p className="footer-copy">
          © 2026 <span className="brand">KrizAWSDBA</span> | All Rights Reserved
        </p>

        <div className="footer-links">

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/krishnan-thiruvengadam-598258186/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>

          <span className="footer-divider">•</span>

          {/* EMAIL (SMART HANDLER) */}
          <a
            href="/"
            onClick={handleEmailClick}
            className="footer-link"
          >
            Email
          </a>

          {/* 🔥 COPY BUTTON */}
          <button
            className="footer-copy-btn"
            onClick={handleCopy}
          >
            <FaCopy size={12} />
          </button>

          <span className="footer-divider">•</span>

          {/* LOCATION */}
          <span className="footer-location">
            Sydney, Australia
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;