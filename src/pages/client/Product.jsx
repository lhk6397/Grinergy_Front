import React, { useContext, useEffect } from "react";

import * as P from "../../styles/client/product.styles";
import productBanner from "../../assets/images/product_banner.jpg";
import {
  CircleModel,
  IntroMap,
  LTOInfoItem,
  ProductBigImg,
  ProductExItem,
} from "../../components";
import LTOInfoList from "../../data/LTOInfoList";
import ProductExList from "../../data/ProductExList";
import { Banner, Paragraph, Phrase } from "../../components";
import {
  product1,
  product2,
  product3,
  m_product1,
  m_product2,
  m_product3,
} from "../../data/ParagraphData";
import { LanguageContext } from "../../context/LanguageContext";

const Product = () => {
  const { isENG } = useContext(LanguageContext);
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Product`;
  }, []);

  return (
    <P.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      {isENG ? (
        <Phrase isProductPage>
          {window.matchMedia("(orientation: landscape)").matches ? (
            <>
              Green energy
              <br />
              innovation for future
            </>
          ) : (
            <>
              Green energy
              <br />
              innovation for future
            </>
          )}
        </Phrase>
      ) : (
        <Phrase isProductPage>
          그린에너지,
          <br />
          미래를 여는 푸른 전지
        </Phrase>
      )}

      <Banner src={productBanner} />

      <Paragraph
        data={
          window.matchMedia("(orientation: landscape)").matches
            ? product1
            : m_product1
        }
      />
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

      <Paragraph
        data={
          window.matchMedia("(orientation: landscape)").matches
            ? product2
            : m_product2
        }
      />
      <P.CircleContainer>
        <CircleModel />
      </P.CircleContainer>

      <P.Wrapper>
        <P.SmallTitle isENG={isENG}>
          {isENG ? (
            <>
              Advantages of
              <br />
              secondary battery LTO technology
            </>
          ) : (
            "2차 전지 LTO 기술의 장점"
          )}
        </P.SmallTitle>
        {LTOInfoList.map((infoItem, index) => (
          <LTOInfoItem key={index} data={infoItem} />
        ))}
      </P.Wrapper>

      <Paragraph
        data={
          window.matchMedia("(orientation: landscape)").matches
            ? product3
            : m_product3
        }
        color={["black", "black"]}
        isLast
      />

      <P.ProductExItemList>
        {ProductExList.map((infoItem, index) => (
          <ProductExItem key={index} data={infoItem} />
        ))}
      </P.ProductExItemList>
    </P.Container>
  );
};

export default Product;
