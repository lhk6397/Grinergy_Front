import React, { useEffect } from "react";

import * as I from "../../styles/client/investors.styles";
import { InvestorGrid } from "../../components/index";

const Investors = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Investors`;
  }, []);
  return (
    <I.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <I.Phrase>Growing together</I.Phrase>
      <I.Wrapper>
        <InvestorGrid />
      </I.Wrapper>
      <I.Cover />
    </I.Container>
  );
};

export default Investors;
