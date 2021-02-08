import styles from "./About.module.css";
const TextSkills = () => {
  return (
    <div className={styles.aboutSkills}>
      <div className={styles.textAbout}>
        <h2>
          I'm a Front-End-Developer with {`<`} 1 year experience. Currently my
          main professional goal is to find a job that will give me an
          opportunity to improve my programming skills, engage in interesting
          and creative projects and raise my web development qualifications. On
          a personal level, I'm highly-motivated, hard-working and constantly
          seeking to improve my skills person.
        </h2>
      </div>
      <div className={styles.languages}>
        <h2>Languages:</h2>
        <ul>
          <li>English</li>
          <li>Polish</li>
          <li>Russian</li>
          <li>Ukrainian</li>
        </ul>
      </div>
      <div className={styles.location}>
        <h2>
          <span className={styles.locationIcon}>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          Location:
        </h2>
        <h3 className={styles.city}>Gdansk,Poland</h3>
        <h3 className={styles.city}>(Open to relocate)</h3>
      </div>
    </div>
  );
};
export default TextSkills;
