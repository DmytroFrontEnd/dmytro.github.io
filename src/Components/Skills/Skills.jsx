import NameText from "../NameText/NameText";
import ProgressBarCirc from "./ProgressBarCirc";
import ProgressBarRect from "./ProgressBarRect";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div id="skills" className="skillsComponent">
      <NameText text="Skills" />
      <div className={styles.loaders}>
        <div className={styles.rectDiv}>
          <ProgressBarRect text="HTML5" percentage="90" />
          <ProgressBarRect text="CSS3" percentage="90" />
          <ProgressBarRect text="JavaScript" percentage="80" />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.circDiv}>
            <div className={styles.skill}>
              <ProgressBarCirc skillName="ReactJS" percentage="70" />
            </div>
            <div className={styles.skill}>
              <ProgressBarCirc skillName={"Redux"} percentage="65" />
            </div>
          </div>
          <div className={styles.other}>
            <h3>Other Skills:</h3>
            <ul>
              <li>Redux-Saga</li>
              <li>Git</li>
              <li>Github</li>
              <li>Adobe Photoshop</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
