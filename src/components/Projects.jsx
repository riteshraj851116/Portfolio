import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "JobSphere",
    tagline: "Full Stack Job Portal",
    type: "Full Stack | 2026",
    tech: "React.js • Node.js • Express.js • MongoDB • JWT • Socket.IO",
    points: [
      "Built a full-stack job portal to connect job seekers and recruiters smoothly on a single platform.",
      "Set up secure login using JWT and bcrypt, ensuring 100% data protection for user passwords.",
      "Wrote clean REST APIs (around 40+ endpoints) with Node.js to handle job searches and profiles quickly.",
      "Added Socket.IO for real-time live chat between users, keeping message delay under 50ms."
    ],
    liveUrl: "https://riteshraj851116.github.io/jobsphere/",
    githubUrl: "https://github.com/riteshraj851116/jobsphere"
  },
  {
    title: "VeloceDrive",
    tagline: "Car Rental Management System",
    type: "Full Stack | 2026",
    tech: "React.js • Node.js • Express.js • MongoDB • JWT • Mongoose",
    points: [
      "Developed a complete car rental app handling everything from searching cars to the final booking.",
      "Created a fast search and filter system with Mongoose, helping users find cars in less than 200ms.",
      "Built a dedicated owner dashboard using 15+ reusable React components to keep the code clean.",
      "Secured all backend operations and sensitive data using industry-standard Express middleware."
    ],
    liveUrl: "https://riteshraj851116.github.io/teracar/",
    githubUrl: "https://github.com/riteshraj851116/teracar"
  },
  {
    title: "RCB Fan Team Website",
    tagline: "Interactive Sports Web Experience",
    type: "Frontend | 2026",
    tech: "React.js • JavaScript • HTML5 • CSS3 • Vite",
    points: [
      "Built a fast and responsive fan website using React and Vite, scoring 90+ on Lighthouse performance.",
      "Used React state to show live match updates and team rosters smoothly without page reloads.",
      "Styled with CSS Grid and Flexbox so the site looks perfect on all screens, from mobiles to desktops."
    ],
    liveUrl: "https://github.com/riteshraj851116",
    githubUrl: "https://github.com/riteshraj851116"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <span>FEATURED WORK</span>
        <h2>
          Featured
          <br />
          Projects
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>

              <div className="project-desc">
                <ul>
                  {project.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
