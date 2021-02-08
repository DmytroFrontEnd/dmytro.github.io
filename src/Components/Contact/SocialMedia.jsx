import styles from "./Contact.module.css";
const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <h3>
        <a href="tel:+48693893162">
          <i className="fas fa-phone" /> +48 693 893 162
        </a>
      </h3>
      <h3>
        <a href="https://www.linkedin.com/in/dimitri001/">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
      </h3>
      <h3>
        <a href="https://github.com/DmytroFrontEnd">
          <i className="fab fa-github" /> Github
        </a>
      </h3>
      <h3>
        <a href="https://www.instagram.com/_dimitrii/">
          <i className="fab fa-instagram" /> Instagram
        </a>
      </h3>
    </div>
  );
};

export default SocialMedia;
