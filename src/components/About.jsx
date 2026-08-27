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
          Engineering.
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
          I'm <strong>Ritesh Raj</strong>, a Computer Science undergraduate at <strong>Galgotias University (2023 – 2027)</strong> with a <strong>7.3 CGPA</strong>. As a passionate Full Stack Developer, I specialize in architecting scalable MERN stack web platforms, real-time WebSocket systems, and clean RESTful APIs.
        </p>

        <p>
          Equipped with 200+ solved DSA problems in Java and 150+ hours of full-stack training from CodeHelp, I focus on building efficient, responsive, and performance-optimized digital experiences from concept to cloud deployment.
        </p>

        <div className="about-info">
          <div>
            <h3>3+</h3>
            <span>Full-Stack Apps</span>
          </div>

          <div>
            <h3>200+</h3>
            <span>DSA Solved</span>
          </div>

          <div>
            <h3>7.3</h3>
            <span>B.Tech CGPA</span>
          </div>

          <div>
            <h3>2027</h3>
            <span>Graduation</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;