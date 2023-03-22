import React, { useRef, useState } from "react";
import styled from "styled-components";
import useInterval from "../../utils/useInterval";
import clipImg from "../../assets/images/clipImg.png";
import useFull from "../../utils/useFull";
import backskipIcon from "../../assets/images/back-skip.png";
import skipIcon from "../../assets/images/skip.png";
import fullIcon from "../../assets/images/full.png";
import pauseIcon from "../../assets/images/pause.png";
import playIcon from "../../assets/images/play.png";
import volumeIcon from "../../assets/images/volume.png";
import muteIcon from "../../assets/images/mute.png";

const Clip = styled.video`
  height: 100%;
  padding: 60px 0;
  @media screen and (${(props) => props.theme.size.md}) {
    padding: 24px 0;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    padding: 15px 0;
  }
`;

const Wrapper = styled.div`
  opacity: ${(props) => (!props.isPlaying ? "1" : props.isHover ? "1" : "0")};
  width: 100%;
  position: absolute;
  bottom: 72px;
  display: flex;
  align-items: end;
  @media screen and (${(props) => props.theme.size.md}) {
    bottom: 30px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    bottom: 19px;
  }
`;

const TimeControlsIcon = styled.img`
  /* width: 1vw; */
  cursor: pointer;
  height: 20px;

  margin-left: 12px;
  @media screen and (${(props) => props.theme.size.md}) {
    margin-left: 6px;
    height: 10px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 7px;
    margin-left: 4px;
  }
`;
const ControlsWrapper = styled.div`
  width: 82px;
  aspect-ratio: 82/49;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  background-color: #3c3736;
  margin: 0 12px;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 41px;
    margin: 0 6px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 30px;
    margin: 0 4px;
  }
`;

const ControlsIcon = styled.img`
  width: 24px;
  aspect-ratio: 24/25;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 12px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 9px;
  }
`;

const TimeControl = styled.div`
  margin-right: 12px;
  width: 100%;
  background-color: #3c3736;
  border-radius: 5px;
  height: 37px;
  display: flex;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 18.5px;
    margin-right: 6px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 13.5365px;
    margin-right: 4px;
  }
`;

const Time_progressbarPseudoWrapper = styled.div`
  height: 100%;
  padding: 12px;
  background-color: #3c3736;
  z-index: 9;
  width: 100%;
  @media screen and (${(props) => props.theme.size.md}) {
    padding: 6px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    padding: 4px;
  }
`;

const Time_progressbarContainer = styled.div`
  border: 1pt solid gray;
  width: 100%;
  height: 13px;
  position: relative;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 7.5px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 5.5365px;
  }
`;

const Time_progressBar = styled.div`
  background-color: rgb(47, 171, 191);
  height: 100%;
`;

const VolumeIcon = styled.img`
  cursor: pointer;
  height: 20px;
  margin-right: 12px;
  @media screen and (${(props) => props.theme.size.md}) {
    margin-right: 6px;
    height: 10px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    height: 7px;
    margin-right: 4px;
  }
`;

const FullScreenIcon = styled(VolumeIcon)`
  @media screen and (${(props) => props.theme.size.md}) {
  }
`;

const VideoClip = ({ src }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [full, setFull] = useFull(videoRef);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volumeClicked, setVolumeClicked] = useState(true);
  const [isHover, setIsHover] = useState(false);

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
    <div
      style={{ position: "relative", height: "100%" }}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Clip
        id="video1"
        ref={videoRef}
        src={src}
        poster={clipImg}
        onEnded={() => setPlaying(false)}
        playsinline
      ></Clip>
      <Wrapper isPlaying={playing} isHover={isHover}>
        <ControlsWrapper>
          {playing ? (
            <ControlsIcon
              onClick={() => videoHandler("pause")}
              src={pauseIcon}
            />
          ) : (
            <ControlsIcon
              style={{ transform: "translateX(10%)" }}
              onClick={() => videoHandler("play")}
              src={playIcon}
            />
          )}
        </ControlsWrapper>

        <TimeControl>
          <TimeControlsIcon onClick={revert} src={backskipIcon} />

          <TimeControlsIcon onClick={fastForward} src={skipIcon} />
          {/* <ControlsTime>
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </ControlsTime> */}
          <Time_progressbarPseudoWrapper>
            <Time_progressbarContainer>
              <Time_progressBar
                ref={progressRef}
                style={{ width: `${progress}%` }}
              ></Time_progressBar>
            </Time_progressbarContainer>
          </Time_progressbarPseudoWrapper>
          {/* <ControlsTime>
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </ControlsTime> */}
          <>
            {volumeClicked ? (
              <VolumeIcon onClick={handleVolume} src={volumeIcon} />
            ) : (
              <VolumeIcon onClick={handleVolume} src={muteIcon} />
            )}
          </>

          <FullScreenIcon onClick={() => setFull(!full)} src={fullIcon} />
        </TimeControl>
      </Wrapper>
    </div>
  );
};

export default VideoClip;
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
