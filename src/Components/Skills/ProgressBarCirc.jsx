import ProgressBar from "react-animated-progress-bar";
import styles from "./Skills.module.css";

const ProgressBarCirc = (props) => {
  return (
    <div className={styles.circ}>
      <h3 className={styles.skillName}>{props.skillName}</h3>
      <ProgressBar
        defColor={{
          fair: "rgba(255, 255, 255, 0.918))",
          good: "rgba(255, 255, 255, 0.918)",
          excellent: "rgba(255, 255, 255, 0.918)",
          poor: "rgba(255, 255, 255, 0.918)",
        }}
        width="230"
        trackWidth="13"
        percentage={props.percentage}
      />
    </div>
  );
};
export default ProgressBarCirc;
