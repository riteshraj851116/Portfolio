import "../styles/Skills.css";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    tech: "JavaScript (ES6+) • Java • HTML5 • CSS3 • SQL"
  },
  {
    title: "Frontend Development",
    tech: "React.js • React Router • Vite • Responsive Design • Component Architecture"
  },
  {
    title: "Backend & Database",
    tech: "Node.js • Express.js • RESTful APIs • MongoDB • Mongoose ORM • JWT Auth"
  },
  {
    title: "Tools & DevOps",
    tech: "Git • GitHub • VS Code • Postman • Socket.IO • npm • Vercel • Render"
  },
  {
    title: "Core Competencies",
    tech: "DSA in Java • Object-Oriented Programming (OOP) • Problem Solving • Clean Code"
  },
  {
    title: "Certifications",
    tech: "MERN Stack Course (CodeHelp Babbar 150+ hrs) • DSA in Java (Apna College 200+ problems)"
  }
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-heading">
        <span>TECHNICAL ARSENAL</span>
        <h2>
          Skills &
          <br />
          Technologies
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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