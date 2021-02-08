import NameText from "../NameText/NameText";
import Text from "./TextAbout";
import TextSkills from "./TextSkills";
import styles from "./About.module.css";
const About = () => {
  return (
    <div id="about" className="about">
      <NameText text="About me" />
      <div className={styles.aboutSection}>
        <Text />
        <TextSkills />
      </div>
    </div>
  );
};
export default About;
