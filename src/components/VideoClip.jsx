import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import useInterval from "../utils/useInterval";
// import "../utils/videocontrol";

const Clip = styled(motion.video)`
  width: 76vw;
`;

const Wrapper = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  :hover {
    opacity: 1;
  }
`;

const ControlsContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50%;
  background-color: transparent;
  z-index: 20;
  @media screen and (${(props) => props.theme.size.ss}) {
    bottom: 40%;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
`;

const ControlsIcon = styled.svg`
  width: 2.0833vw;
  aspect-ratio: 1/1;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 20px;
  }
`;

const ControlsIconSmall = styled.svg`
  width: 3.333vw;
  aspect-ratio: 1/1;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 44px;
  }
`;

const TimeControl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 15px;
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -1px;
  }
`;

const Time_progressbarContainer = styled.div`
  background-color: gray;
  border-radius: 15px;
  width: 60vw;
  height: 5px;
  z-index: 30;
  position: relative;
  margin: 0 20px;
`;

const Time_progressBar = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.green};
  height: 100%;
`;

const ControlsTime = styled.p`
  color: #000;
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 10px;
  }
`;

// const fadeIn = {
//   start: { opacity: 0 },
//   end: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
// };

const VideoClip = ({ src }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  useInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <div style={{ position: "relative" }}>
      <Clip id="video1" ref={videoRef} src={src}></Clip>
      <Wrapper>
        <ControlsContainer>
          <Controls>
            <ControlsIcon
              onClick={revert}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </ControlsIcon>
            {playing ? (
              <ControlsIconSmall
                onClick={() => videoHandler("pause")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </ControlsIconSmall>
            ) : (
              <ControlsIconSmall
                onClick={() => videoHandler("play")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </ControlsIconSmall>
            )}
            <ControlsIcon
              onClick={fastForward}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </ControlsIcon>
          </Controls>
        </ControlsContainer>

        <TimeControl>
          <ControlsTime>
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </ControlsTime>
          <Time_progressbarContainer>
            <Time_progressBar
              style={{ width: `${progress}%` }}
            ></Time_progressBar>
          </Time_progressbarContainer>
          <ControlsTime>
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </ControlsTime>
        </TimeControl>
      </Wrapper>
    </div>
  );
};

export default VideoClip;
