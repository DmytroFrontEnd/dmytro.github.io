import math from "../../Images/math.png";
import nasa from "../../Images/nasa.png";
import alghoritms from "../../Images/alghoritms.png";
import editor from "../../Images/editor.png";
import styles from "./Projects.module.css";
import NameText from "../NameText/NameText";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <NameText text="Projects" />
      <div className={styles.imagesContainer}>
        <div>
          <h2 className={styles.websiteName}>
            Sorting Alghoritms Vizualization
            <span className={styles.githubIcon}>
              <a
                className={styles.github}
                rel="noreferrer"
                target="_blank"
                href="https://github.com/DmytroFrontEnd/SORTING-ALGHORITM-PROJECT"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
          </h2>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://dmytrofrontend.github.io/SORTING-ALGHORITM-PROJECT/"
          >
            <img className={styles.math} src={alghoritms} alt="/" />
          </a>
        </div>
        <div>
          <h2 className={styles.websiteName}>
            Photo editor
            <span className={styles.githubIcon}>
              <a
                className={styles.github}
                rel="noreferrer"
                target="_blank"
                href="https://github.com/DmytroFrontEnd/PHOTO-EDITOR-PROJECT"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
          </h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://dmytrofrontend.github.io/PHOTO-EDITOR-PROJECT/"
          >
            <img className={styles.math} src={editor} alt="/" />
          </a>
        </div>
        <div>
          <h2 className={styles.websiteName}>
            Math games
            <span className={styles.githubIcon}>
              <a
                className={styles.github}
                rel="noreferrer"
                target="_blank"
                href="https://github.com/DmytroFrontEnd/MATH-GAMES-PROJECT"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
          </h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://dmytrofrontend.github.io/MATH-GAMES-PROJECT/"
          >
            <img className={styles.math} src={math} alt="/" />
          </a>
        </div>
        <div>
          <h2 className={styles.websiteName}>
            NASA API
            <span className={styles.githubIcon}>
              <a
                className={styles.github}
                rel="noreferrer"
                target="_blank"
                href="https://github.com/DmytroFrontEnd/NASA-API-PROJECT"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
          </h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://dmytrofrontend.github.io/NASA-API-PROJECT/"
          >
            <img className={styles.math} src={nasa} alt="/" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
