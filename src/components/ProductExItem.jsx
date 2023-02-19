import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  height: 30vw;
  object-fit: cover;
`;

const Text = styled.span`
  font-size: 2.0313vw;
  letter-spacing: -0.015em;
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.95);
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 2px;
    font-size: 12.5pt;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 9.5pt;
  }
`;

const ProductExItem = ({ data }) => {
  return (
    <Wrapper>
      <Img src={data.img} />
      <Text>{data.text}</Text>
    </Wrapper>
  );
};

export default ProductExItem;
