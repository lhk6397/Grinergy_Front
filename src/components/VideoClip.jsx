import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Clip = styled(motion.video)`
  width: 76vw;
`;

const fadeIn = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

const VideoClip = ({ src }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <Clip
      ref={ref}
      controls
      variants={fadeIn}
      animate={inView ? "end" : "start"}
      initial={"start"}
    >
      <source src={src} type="video/mp4" />
    </Clip>
  );
};

export default VideoClip;
