import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const hideNavbar = () => {
    const navbar = document.querySelector(".navbarContainer");
    navbar.classList.add("hideNavbar");
    setTimeout(() => {
      setShowNavbar(false);
      navbar.classList.remove("hideNavbar");
    }, 1000);
  };

  return (
    <div>
      <div onClick={() => setShowNavbar(true)} className={styles.barsDiv}>
        <i className="fas fa-bars"></i>
      </div>
      <div
        className={
          showNavbar ? "navbarContainer showNavbar" : "navbarContainer"
        }
      >
        <div className={styles.listDiv}>
          {showNavbar ? (
            <div onClick={hideNavbar} className={styles.close}>
              <i className="fas fa-times"></i>
            </div>
          ) : null}
          <ul className={styles.list}>
            <li>
              <Link
                onClick={window.innerWidth > 1400 ? null : hideNavbar}
                delay={window.innerWidth > 1400 ? 0 : 1000}
                offset={-150}
                smooth={true}
                to="home"
                spy={true}
                duration={1500}
                activeClass={styles.activeLink}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={window.innerWidth > 1400 ? null : hideNavbar}
                delay={window.innerWidth > 1400 ? 0 : 1000}
                offset={-150}
                smooth={true}
                to="skills"
                spy={true}
                duration={1500}
                activeClass={styles.activeLink}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={window.innerWidth > 1400 ? null : hideNavbar}
                delay={window.innerWidth > 1400 ? 0 : 1000}
                smooth={true}
                to="projects"
                spy={true}
                duration={1500}
                activeClass={styles.activeLink}
                offset={20}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={window.innerWidth > 1400 ? null : hideNavbar}
                delay={window.innerWidth > 1400 ? 0 : 1000}
                smooth={true}
                to="about"
                spy={true}
                duration={1500}
                offset={window.innerWidth > 1400 ? -110 : 0}
                activeClass={styles.activeLink}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={window.innerWidth > 1400 ? null : hideNavbar}
                delay={window.innerWidth > 1400 ? 0 : 1000}
                smooth={true}
                to="contact"
                spy={true}
                duration={1500}
                offset={-100}
                activeClass={styles.activeLink}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
