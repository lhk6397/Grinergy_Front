import { motion } from "framer-motion";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toggledAtom } from "../axios";

const Shadow = styled(motion.div)`
  display: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
    z-index: 10;
  }
`;

const Overlay = () => {
  const [toggled, setToggled] = useRecoilState(toggledAtom);
  return (
    <>{toggled ? <Shadow onClick={() => setToggled(false)}></Shadow> : null}</>
  );
};

export default Overlay;
