import { useEffect } from "react";

import * as C from "../../styles/client/continue.styles";
import greeny from "../../assets/images/continue_greeny.png";

const Continue = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Continue`;
  }, []);
  return (
    <C.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <C.Box>our new website</C.Box>
      <C.Greeny
        transition={{ delay: 1, type: "spring" }}
        animate={{
          y: [0, -30, 0],
        }}
        src={greeny}
      ></C.Greeny>
      <C.Phrase>
        under
        <br />
        construction
      </C.Phrase>
    </C.Container>
  );
};

export default Continue;
