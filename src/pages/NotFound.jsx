import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin-top: 30vh; */
  text-align: center;
  span {
    font-size: 3rem;
    font-family: ${(props) => props.theme.font.eng.bold};
    @media screen and (${(props) => props.theme.size.sm}) {
      font-size: 2rem;
    }
  }
`;

const NotFound = () => {
  return (
    <Container>
      <span>404 | NOT FOUND</span>
    </Container>
  );
};

export default NotFound;
