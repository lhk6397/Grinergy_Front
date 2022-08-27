import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import productBanner from "../assets/images/product_banner.JPG";
import {
  CircleModel,
  IntroMap,
  LTOInfoItem,
  ProductBigImg,
  ProductExItem,
} from "../components";
import LTOInfoList from "../data/LTOInfoList";
import ProductExList from "../data/ProductExList";
import { Banner, Paragraph } from "../components";
import { product1, product2, product3 } from "../data/ParagraphData";

const Container = styled.div`
  margin-top: 19.623vh;
  margin-bottom: 14.1667vh;
  overflow-x: hidden;
  /* @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 15vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin-top: 13vh;
  } */
`;

const Phrases = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 5.2083vw;
  line-height: 5.9896vw;
  letter-spacing: -0.065em;
  margin-bottom: 3.2407vh;
  text-align: left;
  font-family: ${(props) => props.theme.font.kr.regular};

  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 6.9vw;
    line-height: 75px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 8.9vw;
    line-height: 65px;
    margin-bottom: 20px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    line-height: 40px;
    margin-bottom: 15px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 35px;
  }
`;

const CircleContainer = styled.div`
  margin: 15vw 0;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 50vw;
  }
`;

const SmallTitle = styled.h2`
  font-family: ${(props) => props.theme.font.kr.medium};
  font-size: 1.4063vw;
  letter-spacing: -0.03em;
  color: rgba(0, 0, 0, 0.95);
  border-bottom: 0.75px solid rgba(0, 0, 0, 0.7);
  padding-bottom: 1.5rem;
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 1.5rem;
    padding-bottom: 8px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 1rem;
    padding-bottom: 5px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 0.8rem;
    padding-bottom: 4px;
  }
`;

const ProductExItemList = styled.ul`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 8vh;
  column-gap: 6.5px;
  @media screen and (${(props) => props.theme.size.md}) {
    row-gap: 4vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    row-gap: 4vh;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    row-gap: 3vh;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    column-gap: 5vw;
    row-gap: 2vh;
  }
`;
const Wrapper = styled(motion.div)`
  width: 40.833vw;
  margin: 17.592vh auto;
  @media screen and (${(props) => props.theme.size.lg}) {
    width: fit-content;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 80vw;
    margin: 10vh auto;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    margin: 6.5vh auto;
  }
`;

const Product = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Product`;
  }, []);

  return (
    <Container>
      <Phrases>
        그린에너지,
        <br />
        미래를 여는 푸른 전지
      </Phrases>

      <Banner src={productBanner} />

      <Wrapper>
        <Paragraph data={product1} />
      </Wrapper>

      <IntroMap />

      <ProductBigImg />

      <Wrapper>
        <Paragraph data={product2} />
      </Wrapper>
      <CircleContainer>
        <CircleModel />
      </CircleContainer>

      <Wrapper>
        <SmallTitle>2차전지 LTO기술의 장점</SmallTitle>
        {LTOInfoList.map((infoItem, index) => (
          <LTOInfoItem key={index} data={infoItem} />
        ))}
      </Wrapper>

      <Wrapper style={{ marginTop: "26.5778vh", marginBottom: "6.9387vh" }}>
        <Paragraph data={product3} color={["black", "black"]} />
      </Wrapper>

      <ProductExItemList>
        {ProductExList.map((infoItem, index) => (
          <ProductExItem key={index} data={infoItem} />
        ))}
      </ProductExItemList>
    </Container>
  );
};

export default Product;
