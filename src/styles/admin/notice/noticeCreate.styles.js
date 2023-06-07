import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: white;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  font-size: 0.9375rem;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }
`;

export const FileList = styled.ul`
  background-color: #f7f7f7;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  margin-top: -10px;
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 10px;
    padding: 5px;
    gap: 3px;
  }

  li {
    width: 13vw;
    display: flex;
    font-size: 0.75rem;
    justify-content: space-between;
    @media screen and (${(props) => props.theme.size.sm}) {
      width: 100%;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.font.kr.regular};
  &[type="file"] {
    margin-bottom: 0px;
    background-color: #f5f5f5;
    padding: 10px 20px;
    border: none;
  }
`;

export const EditorBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  width: fit-content;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid black;

  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }
  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
