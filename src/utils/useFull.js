import { useEffect, useState } from "react";

const useFull = (el) => {
  const [full, setFull] = useState(false);
  const revert = () => {
    if (!document.fullscreenElement) {
      setFull(false);
      document.removeEventListener("fullscreenchange", revert);
    }
  };
  useEffect(() => {
    if (full) {
      const elem = el.current;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
        document.addEventListener("fullscreenchange", revert);
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
        document.addEventListener("fullscreenchange", revert);
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
        document.addEventListener("fullscreenchange", revert);
      }
    }
    return () => {
      document.removeEventListener("fullscreenchange", revert);
    };
  }, [full]);
  return [full, setFull];
};

export default useFull;
