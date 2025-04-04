import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const SpiderNetBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#fff",
        },
        particles: {
          number: {
            value: 60,
            density: { enable: true, value_area: 800 },
          },
          color: {
            value: "#f7931e",
          },
          links: {
            enable: true,
            color: "#f7931e",
            distance: 120,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default SpiderNetBackground;
