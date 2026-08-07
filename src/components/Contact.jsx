import "../styles/Contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <span>GET IN TOUCH</span>

        <h2>Let's Build Something Amazing.</h2>

        <p>
          Looking for internships, freelance work or exciting collaborations.
          Feel free to connect with me.
        </p>

        <div className="contact-links">

          <a
            href="mailto:riteshraj851116@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
            <span>riteshraj851116@gmail.com</span>
          </a>

          <a
            href="https://github.com/riteshraj851116"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ritesh-raj-9b52162a7/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;