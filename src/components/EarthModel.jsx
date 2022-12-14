import { motion } from "framer-motion";
import React from "react";
import styled, { keyframes } from "styled-components";
import earth from "../assets/images/blackearth.jpg";

const Wrapper = styled(motion.div)`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11.38vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100vw;
    padding: 0 10px;
  }
`;

const EarthWrapper = styled.div`
  position: relative;
`;

const rotation1 = keyframes`
100% { transform:rotate3d(1,1,1,360deg); }
`;
const rotation2 = keyframes`
100% { transform:rotate3d(-1,-1,-1,360deg); }
`;

const Button = styled(motion.svg)`
  width: 10.86vw;
  aspect-ratio: 1/1;
  transform-style: preserve-3d;
  perspective: 300px;
  backface-visibility: visible;
  :first-child {
    animation: ${rotation1} 6s linear infinite;
  }
  :last-child {
    animation: ${rotation2} 6s linear infinite;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 15.86vw;
  }
`;

const Line = styled(motion.div)`
  width: 21.175vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  border-radius: 50%;
  aspect-ratio: 1/1;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 42vw;
  }
`;

const Earth = styled(motion.div)`
  position: relative;
  width: 19.916vw;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 50%;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 40vw;
  }
`;

const EarthModel = () => {
  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <Button
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path d="M12 4.5v15m7.5-7.5h-15" />
      </Button>

      <EarthWrapper>
        <Earth
          src={earth}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear",
          }}
          animate={{ rotateZ: 360 }}
        >
          <Line
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
            animate={{ rotateY: [0, 360, 720], rotateZ: [0, 240, 600] }}
            initial={{
              translateX: "-50%",
              translateY: "-50%",
              rotateX: 250,
            }}
          ></Line>
          <Line
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
            animate={{ rotateY: [0, 360, 720] }}
            initial={{
              translateX: "-50%",
              translateY: "-50%",
              rotateX: 270,
            }}
          ></Line>
          <Line
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
            animate={{ rotateX: [50, 410, 770] }}
            initial={{
              translateX: "-50%",
              translateY: "-50%",
              rotateY: 310,
            }}
          ></Line>
          <Line
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
            animate={{ rotateX: [140, 500, 860] }}
            initial={{
              translateX: "-50%",
              translateY: "-50%",
              rotateY: 140,
            }}
          ></Line>
        </Earth>
      </EarthWrapper>
      <Button
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path d="M19.5 12h-15" />
      </Button>
    </Wrapper>
  );
};

export default EarthModel;
