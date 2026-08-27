import "../styles/Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {

  const [active, setActive] = useState("home");

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };

  }, []);

  return (

    <nav className="navbar">

      <div className="logo">
        Ritesh Raj.
      </div>

      <ul className="nav-links">

        <li>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>

   

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>

  );
}

export default Navbar;