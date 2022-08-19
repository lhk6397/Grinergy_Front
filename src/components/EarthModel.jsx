import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import earth from "../assets/images/blackearth.jpg";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 90vw;
  }
`;

const EarthWrapper = styled.div`
  position: relative;
`;

const Button = styled(motion.svg)`
  width: 7.86vw;
  height: 7.86vw;
`;

const Line = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  border-radius: 50%;
  perspective: 1000px;

  :nth-child(1) {
    width: 23.645vw;
    height: 23.073vw;
    @media screen and (${(props) => props.theme.size.md}) {
      width: 40.5vw;
      height: 40.5vw;
    }
  }
  :nth-child(2) {
    width: 24.375vw;
    height: 23.802vw;
    @media screen and (${(props) => props.theme.size.md}) {
      width: 41vw;
      height: 41vw;
    }
  }
  :nth-child(3) {
    width: 25.104vw;
    height: 24.531vw;
    @media screen and (${(props) => props.theme.size.md}) {
      width: 41.5vw;
      height: 41.5vw;
    }
  }
  :nth-child(4) {
    width: 25.833vw;
    height: 25.26vw;
    @media screen and (${(props) => props.theme.size.md}) {
      width: 42vw;
      height: 42vw;
    }
  }

  /* @media screen and (${(props) => props.theme.size.md}) {
    width: 55vw;
    height: 55vw;
  } */
`;

const Earth = styled(motion.div)`
  position: relative;
  width: 22.917vw;
  height: 22.344vw;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 50%;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 40vw;
    height: 40vw;
  }
`;

const EarthModel = () => {
  return (
    <Wrapper>
      <Button xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
      </Button>
      <EarthWrapper>
        <Earth
          src={earth}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          animate={{ rotateZ: 360 }}
        >
          <Line
            transition={{
              repeat: Infinity,
              duration: 8,
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
              duration: 8,
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
              duration: 8,
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
              duration: 8,
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
      <Button xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
      </Button>
    </Wrapper>
  );
};

export default EarthModel;
