import styles from "./About.module.css";
const Text = () => {
  return (
    <div className={styles.textComponent}>
      <h1 className={styles.name}>
        <span className={styles.dmytro}>DMYTRO</span>{" "}
        <span className={styles.posyliuzhnyi}> POSYLIUZHNYI</span>
      </h1>
    </div>
  );
};
export default Text;
