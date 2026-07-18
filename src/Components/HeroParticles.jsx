import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HeroParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 900,
            },
          },

          color: {
            value: "#b8b8b8",
          },

          links: {
            enable: true,
            distance: 160,
            color: "#d2d2d2",
            opacity: 0.4,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 2,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 1,
              },
            },
          },
        },
      }}
    />
  );
};

export default HeroParticles;