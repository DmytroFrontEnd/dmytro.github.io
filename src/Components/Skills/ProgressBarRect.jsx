import { useEffect, useState } from "react";
import ProgressBar from "react-animated-progress-bar";
import styles from "./Skills.module.css";
const ProgressBarRect = (props) => {
  const [width, setWidth] = useState(450);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setWidth(200);
    }
  }, []);
  return (
    <div>
      <h3 className={styles.skillName}>{props.text}</h3>
      <ProgressBar
        width={`${width}px`}
        height="8px"
        rect
        fontColor="rgba(255, 255, 255, 0.918)"
        percentage={props.percentage}
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        defColor={{
          fair: "rgba(255, 255, 255, 0.918)",
          good: "rgba(255, 255, 255, 0.918)",
          excellent: "rgba(255, 255, 255, 0.918)",
          poor: "rgba(255, 255, 255, 0.918)",
        }}
        trackBorderColor="#171717"
      />
    </div>
  );
};
export default ProgressBarRect;
