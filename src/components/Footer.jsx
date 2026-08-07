import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        RR
      </div>

      <div className="footer-center">

        <h3>
          Thanks For Visiting.
        </h3>

        <p>
          Designed & Developed by
          <span> Ritesh Raj Singh</span>
        </p>

      </div>

      <div className="footer-social">

        <a
          href="https://github.com/riteshraj851116"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ritesh-raj-9b52162a7/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <div className="copyright">

        Made with
        <FaHeart />
        in India © 2026

      </div>

    </footer>
  );
}

export default Footer;