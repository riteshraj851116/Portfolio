import "../styles/Skills.css";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    tech: "React • HTML • CSS • JavaScript"
  },
  {
    title: "Backend",
    tech: "Node.js • Express.js"
  },
  {
    title: "Database",
    tech: "MongoDB • MySQL"
  },
  {
    title: "Tools",
    tech: "Git • GitHub • VS Code"
  },
  {
    title: "UI Design",
    tech: "Responsive Design • Framer Motion"
  },
  {
    title: "Learning",
    tech: "Three.js • GSAP • Next.js"
  }
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-heading">

        <span>MY SKILLS</span>

        <h2>
          Technologies
          <br />
          I Work With
        </h2>

      </div>

      <div className="skills-grid">

        {skills.map((item, index) => (

          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: index * .1 }}
            viewport={{ once: true }}
          >

            <h3>{item.title}</h3>

            <p>{item.tech}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;