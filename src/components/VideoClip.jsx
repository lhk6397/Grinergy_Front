import React, { useRef, useState } from "react";
import styled from "styled-components";
import useInterval from "../utils/useInterval";
import clipImg from "../assets/images/clipImg.png";
import useFull from "../utils/useFull";

const Clip = styled.video`
  width: 76vw;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 80vw;
  }
`;

const Wrapper = styled.div`
  opacity: 1;
  width: 100%;
  position: absolute;
  bottom: 15px;
  display: flex;
  align-items: end;
  @media screen and (${(props) => props.theme.size.sm}) {
    bottom: 5px;
  }
`;

const TimeControlsIcon = styled.svg`
  width: 1vw;
  aspect-ratio: 1/1;
  cursor: pointer;
  margin-left: 5px;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 10px;
    margin-left: 3px;
  }
`;
const ControlsWrapper = styled.div`
  width: fit-content;
  padding: 10px 25px;
  border-radius: 10%;
  background-color: #000;
  margin: 0 15px;
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 3px 10px;
    margin: 0 5px;
  }
`;

const ControlsIcon = styled.svg`
  fill: white;
  width: 1.2vw;
  aspect-ratio: 1/1;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 12px;
  }
`;

const TimeControl = styled.div`
  background-color: #000;
  margin-right: 15px;
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 18px;
    margin-right: 5px;
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
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 60%;
  }
`;

const Time_progressBar = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.green};
  height: 100%;
`;

const VolumeIcon = styled.p`
  width: 20px;
  aspect-ratio: 1/1;
  stroke: #fff;
  cursor: pointer;
  svg {
    fill: #fff;
  }
  transform: translate(-10px, 1px);
  @media screen and (${(props) => props.theme.size.sm}) {
    transform: translate(-5px, 0);
    width: 12px;
  }
`;

const FullScreenIcon = styled(VolumeIcon)`
  width: 18px;
  aspect-ratio: 1/1;
  transform: translate(0, 1px);
  @media screen and (${(props) => props.theme.size.sm}) {
    transform: translate(0, 0);
    width: 10px;
  }
`;

// const fadeIn = {
//   start: { opacity: 0 },
//   end: { opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
// };

const VideoClip = ({ src }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [full, setFull] = useFull(videoRef);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volumeClicked, setVolumeClicked] = useState(true);

  // volume 클릭 관련 함수
  const handleVolume = () => {
    if (volumeClicked) {
      if (videoRef.current) {
        videoRef.current.muted = true;
      }
      setVolumeClicked(false);
    } else {
      if (videoRef.current) {
        videoRef.current.muted = false;
      }
      setVolumeClicked(true);
    }
  };
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      setVideoTime(videoRef.current.duration);
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
      <Clip
        id="video1"
        ref={videoRef}
        src={src}
        poster={clipImg}
        onEnded={() => setPlaying(false)}
      ></Clip>
      <Wrapper>
        <ControlsWrapper>
          {playing ? (
            <ControlsIcon
              onClick={() => videoHandler("pause")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z" />
            </ControlsIcon>
          ) : (
            <ControlsIcon
              onClick={() => videoHandler("play")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
            </ControlsIcon>
          )}
        </ControlsWrapper>

        <TimeControl>
          <TimeControlsIcon
            fill="white"
            onClick={revert}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            style={{ transform: "rotateZ(180deg)" }}
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </TimeControlsIcon>

          <TimeControlsIcon
            fill="white"
            onClick={fastForward}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
          </TimeControlsIcon>
          {/* <ControlsTime>
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </ControlsTime> */}
          <Time_progressbarContainer>
            <Time_progressBar
              ref={progressRef}
              style={{ width: `${progress}%` }}
            ></Time_progressBar>
          </Time_progressbarContainer>
          {/* <ControlsTime>
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </ControlsTime> */}
          <VolumeIcon onClick={handleVolume}>
            <>
              {volumeClicked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              )}
            </>
          </VolumeIcon>

          <FullScreenIcon onClick={() => setFull(!full)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z" />
            </svg>
          </FullScreenIcon>
        </TimeControl>
      </Wrapper>
    </div>
  );
};

export default VideoClip;

// import React, { memo, useEffect, useRef, useState } from "react";
// import Controlbar from "./Controlbar";

// const Video = ({ src }) => {
//   const [nowPlaying, setNowPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [showControl, setShowControl] = useState(false);

//   const ref = useRef(null);

//   const totalTime = (ref && ref.current && ref.current.duration) || 0;
//   const videoElement = ref && ref.current;

//   const videoSrc = src || "";
//   const startTime = Math.floor(currentTime);

//   // 동영상 시간 업데이트 함수
//   const addTimeUpdate = () => {
//     const observedVideoElement = ref && ref.current;
//     if (observedVideoElement) {
//       observedVideoElement.addEventListener("timeupdate", function () {
//         setCurrentTime(observedVideoElement.currentTime);
//       });
//       // 컴포넌트가 처음 마운트 될 때 동영상 시작 할지 말지 여부 (여기서는 시작되게 했음)
//       setNowPlaying(true);
//       observedVideoElement.play();
//     }
//   };

//   useEffect(() => {
//     addTimeUpdate();
//   }, []);

//   // progress 이동시켰을때 실행되는 함수
//   const onProgressChange = (percent) => {
//     if (!showControl) {
//       setShowControl(true);
//     }

//     if (videoElement) {
//       const playingTime = videoElement.duration * (percent / 100);

//       setCurrentTime(playingTime);
//     }
//   };

//   // play icon 클릭했을떄 실행되는 함수
//   const onPlayIconClick = () => {
//     if (videoElement) {
//       if (nowPlaying) {
//         setNowPlaying(false);
//         videoElement.pause();
//       } else {
//         setNowPlaying(true);
//         videoElement.play();
//       }
//     }
//   };

//   // control bar visible 관련 함수
//   const handleControlVisible = () => {
//     if (!showControl) {
//       setShowControl(true);
//       setTimeout(() => {
//         setShowControl(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div>
//       <video
//         loop={true}
//         muted={true}
//         ref={ref}
//         playsInline={true}
//         onClick={handleControlVisible}
//         style={{ width: "76vw" }}
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>
//       <Controlbar
//         onProgressChange={onProgressChange}
//         onPlayIconClick={onPlayIconClick}
//         totalTime={totalTime}
//         currentTime={currentTime}
//         startTime={startTime}
//         showControl={showControl}
//         nowPlaying={nowPlaying}
//         videoElement={videoElement}
//       />
//     </div>
//   );
// };

// export default memo(Video);
