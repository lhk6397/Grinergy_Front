import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import productBanner from "../../assets/images/product_banner.JPG";
import {
  CircleModel,
  IntroMap,
  LTOInfoItem,
  ProductBigImg,
  ProductExItem,
} from "../../components";
import LTOInfoList from "../../data/LTOInfoList";
import ProductExList from "../../data/ProductExList";
import { Banner, Paragraph } from "../../components";
import {
  product1,
  product2,
  product3,
  m_product1,
  m_product2,
  m_product3,
} from "../../data/ParagraphData";
import { LanguageContext } from "../../context/LanguageContext";

const Container = styled(motion.div)`
  margin-top: 19.623vh;
  margin-bottom: 4.1666vh;
  overflow-x: hidden;
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
`;

const Phrases = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-size: 6.25vw;
  line-height: 6.5vw;
  letter-spacing: -0.065em;
  margin-bottom: 17.592vh;
  text-align: left;
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.condensed : props.theme.font.kr.regular};

  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 7.9vw;
    line-height: 35px;
    margin-bottom: 8vh;
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
    margin: 20vh 0;
  }
`;

const SmallTitle = styled.h2`
  font-family: ${(props) =>
    props.isENG ? props.theme.font.eng.bold : props.theme.font.kr.medium};
  font-size: 1.4063vw;
  letter-spacing: ${(props) => !props.isENG && "-0.03em"};
  color: rgba(0, 0, 0, 0.95);
  border-bottom: 0.75pt solid rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
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
  const { isENG } = useContext(LanguageContext);
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
      {isENG ? (
        <Phrases isENG={isENG}>
          Green energy
          <br />
          innovation
          <br />
          for future
        </Phrases>
      ) : (
        <Phrases>
          그린에너지,
          <br />
          미래를
          <br />
          여는 푸른 전지
        </Phrases>
      )}

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
        <SmallTitle isENG={isENG}>
          {isENG ? (
            <>
              Advantages of
              <br />
              secondary battery LTO technology
            </>
          ) : (
            "2차 전지 LTO 기술의 장점"
          )}
        </SmallTitle>
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
