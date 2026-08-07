import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>ABOUT ME</span>

        <h2>
          Passion Meets
          <br />
          Technology.
        </h2>
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          I'm <strong>Ritesh Raj Singh</strong>, a MERN Stack Developer who
          enjoys building modern, responsive and interactive web applications.
          I focus on clean UI, smooth animations and creating projects that are
          practical as well as visually appealing.
        </p>

        <p>
          My goal is to build products that not only work efficiently but also
          provide an exceptional user experience. I'm continuously learning new
          technologies and improving my skills in React, Node.js, Express,
          MongoDB and modern frontend development.
        </p>

        <div className="about-info">

          <div>
            <h3>15+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>10+</h3>
            <span>Technologies</span>
          </div>

          <div>
            <h3>2026</h3>
            <span>Graduate</span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;