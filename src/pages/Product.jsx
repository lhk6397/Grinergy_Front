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
import {
  product1,
  product2,
  product3,
  m_product1,
  m_product2,
  m_product3,
} from "../data/ParagraphData";

const Container = styled(motion.div)`
  margin-top: 19.623vh;
  margin-bottom: 4.1666vh;
  overflow-x: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
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
  margin-bottom: 2.2407vh;
  text-align: left;
  font-family: ${(props) => props.theme.font.kr.regular};

  /* @media screen and (${(props) => props.theme.size.md}) {
    font-size: 6.9vw;
    line-height: 75px;
  } */
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 7.9vw;
    line-height: 35px;
    margin-bottom: 10px;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    line-height: 40px;
    margin-bottom: 15px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    line-height: 35px;
  } */
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
    margin: 20vh 0;
  }
`;

const SmallTitle = styled.h2`
  font-family: ${(props) => props.theme.font.kr.medium};
  font-size: 1.4063vw;
  letter-spacing: -0.03em;
  color: rgba(0, 0, 0, 0.95);
  border-bottom: 0.75pt solid rgba(0, 0, 0, 0.7);
  padding-bottom: 1.5rem;
  /* @media screen and (${(props) => props.theme.size.md}) {
    font-size: 1.5rem;
    padding-bottom: 8px;
  } */
  @media screen and (${(props) => props.theme.size.md}) {
    width: 70vw;
    margin: 0 auto;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    text-align: center;
    font-size: 13pt;
    padding-bottom: 5vh;
    width: 70vw;
    margin: 0 auto;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    font-size: 0.8rem;
    padding-bottom: 4px;
  } */
`;

const ProductExItemList = styled.ul`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 8vh;
  column-gap: 7px;
  @media screen and (${(props) => props.theme.size.sm}) {
    column-gap: 5px;
    row-gap: 2.5vh;
  }
`;
const Wrapper = styled(motion.div)`
  width: fit-content;
  margin: 17.592vh auto;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 8vh auto;
  }
  /* @media screen and (${(props) => props.theme.size.ss}) {
    margin: 6.5vh auto;
  } */
`;

const LastWrapper = styled(Wrapper)`
  margin-top: 26.5778vh;
  margin-bottom: 6.9387vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 8vh;
    margin-bottom: 5vh;
  }
`;

const Product = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Product`;
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <Phrases>
        그린에너지,
        <br />
        미래를 여는 푸른 전지
      </Phrases>

      <Banner src={productBanner} />

      <Wrapper>
        <Paragraph
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? product1
              : m_product1
          }
        />
      </Wrapper>
      <div
        style={{
          marginBottom: window.matchMedia("(orientation: landscape)").matches
            ? "7px"
            : "5px",
        }}
      >
        <IntroMap />
      </div>
      <ProductBigImg />

      <Wrapper>
        <Paragraph
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? product2
              : m_product2
          }
        />
      </Wrapper>
      <CircleContainer>
        <CircleModel />
      </CircleContainer>

      <Wrapper>
        <SmallTitle>2차 전지 LTO 기술의 장점</SmallTitle>
        {LTOInfoList.map((infoItem, index) => (
          <LTOInfoItem key={index} data={infoItem} />
        ))}
      </Wrapper>

      <LastWrapper>
        <Paragraph
          data={
            window.matchMedia("(orientation: landscape)").matches
              ? product3
              : m_product3
          }
          color={["black", "black"]}
        />
      </LastWrapper>

      <ProductExItemList>
        {ProductExList.map((infoItem, index) => (
          <ProductExItem key={index} data={infoItem} />
        ))}
      </ProductExItemList>
    </Container>
  );
};

export default Product;
