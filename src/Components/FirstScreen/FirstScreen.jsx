import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import styles from "./FirstScreen.module.css";

const FirstScreen = () => {
  return (
    <div id="home" className={styles.firstScreenComponent}>
      <div className="firstScreen">
        <h1 className={styles.typingText}>
          I'm a{" "}
          <Typewriter
            options={{
              strings: ["Web Developer", "Front-End Engineer", "Web Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <Particles
          id="tsparticles"
          className="canvas"
          options={{
            background: {
              color: {
                value: "#171717",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  opacity: 0.8,
                  size: 100,
                },
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 700,
                },
                value: 120,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 2,
              },
            },
            detectRetina: true,
          }}
        ></Particles>
      </div>
    </div>
  );
};
export default FirstScreen;
