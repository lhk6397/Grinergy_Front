import styled from "styled-components";

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  height: ${(props) =>
    props.isOpen && props.windowSize < 1059 ? "100vh" : "auto"};
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  padding-left: calc(1rem + 250px);
  @media screen and (${(props) => props.theme.size.md}) {
    padding-left: 1rem;
  }
`;
