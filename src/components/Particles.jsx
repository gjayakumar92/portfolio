import React, { useContext } from "react";
import styled from "styled-components";
import { Particles as ReactParticles } from "react-tsparticles";

import { AppContext } from "./../App/AppContext";

const P = {
  Container: styled.div`
    transition: background-color 0.5s linear;
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
  `,
};

export const Particles = () => {
  const { theme } = useContext(AppContext);

  const OPTIONS = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["0d47a1", "00bfff", "22dd22", "ffd500", "ff8000", "ff2600"],
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 10,
        random: true,
        anim: {
          enable: true,
          speed: 20,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "999",
        opacity: 0.9,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grap",
          parallax: {
            enable: true,
            smooth: 10,
            force: 60,
          },
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
        repulse: {
          distance: 200,
        },
      },
    },
    retina_detect: true,
    fpsLimit: 60,
    // 3m@62^K^88745%
  };

  return (
    <P.Container theme={theme}>
      <ReactParticles width="100vw" height="100vh" options={OPTIONS} />
    </P.Container>
  );
};
