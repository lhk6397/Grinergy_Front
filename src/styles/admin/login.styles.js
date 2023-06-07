import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16.55vh;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  gap: 10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 70vw;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 1.5625rem;
  font-family: ${(props) => props.theme.font.eng.bold};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10vw;
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.9375rem;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.font.eng.condensed};
`;

export const StyledBtn = styled.button`
  font-family: ${(props) => props.theme.font.eng.condensed};
  background: #000;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    span {
      position: relative;
      bottom: -3px;
    }
  }
  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &::after {
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0px;
      left: 0px;
      background-color: #000;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
  }
`;
