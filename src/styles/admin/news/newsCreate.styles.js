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

export const PreviewImage = styled.img`
  width: 240px;
  height: 200px;
  aspect-ratio: 240/200;
  margin: 0 auto;
  object-fit: contain;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
  }
`;

export const PreviewImageSelect = styled.label`
  width: 240px;
  height: 200px;
  cursor: pointer;
  aspect-ratio: 240/200;
  font-family: ${(props) => props.theme.font.kr.regular};
  font-size: 0.9375rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  border-radius: 10px;
  color: #ccc;
  margin: 0 auto;
  :hover {
    border-color: #000;
    color: #000;
  }
  svg {
    width: 2.5rem;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.9375rem;
  font-family: ${(props) => props.theme.font.kr.regular};
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 0.8rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  font-family: ${(props) => props.theme.font.kr.regular};
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
