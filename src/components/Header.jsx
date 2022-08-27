import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import logo from "../assets/images/header_logo.png";
import { HeaderMenu } from "../data/RouteList";
import $ from "jquery";
import { motion } from "framer-motion";

// 43px
const Nav = styled.div`
  background-color: transparent;
  padding: 68px 3.854vw;
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 0 36px;
  }
`;

const Col = styled(motion.div)`
  width: 25%;
  &:first-child {
    display: none;
    @media screen and (${(props) => props.theme.size.sm}) {
      display: block;
    }
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media screen and (${(props) => props.theme.size.lg}) {
    width: 10%;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled(motion.img)`
  display: flex;
  align-items: center;
  width: 10.15625vw;
  aspect-ratio: 195/25;
  /* object-fit: cover; */
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.lg}) {
    width: 100px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 140px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 120px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 100px;
  }
`;

const Items = styled.ul`
  width: fit-content;
  display: flex;
  @media screen and (${(props) => props.theme.size.sm}) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 80px 20px;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 99;
    flex-direction: column;
    align-items: end;
    overflow-y: scroll;
  }
`;

const Item = styled.li`
  margin: 0 3.333vw;
  text-align: center;
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 1.1458vw;
  color: #000;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 14px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin: 0;
    text-align: left;
    width: 100%;
    padding: 1.8rem 0 1rem 1rem;
    border-bottom: 1.5px solid #000;
    :nth-child(1) {
      margin-top: 20%;
      order: -1;
    }
    :nth-child(n + 2) {
      order: 1;
    }
    :nth-child(n + 5) {
      order: 0;
    }
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    padding: 1.8rem 0 0.3rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const Language = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.ss}) {
    transform: scale(0.7);
  }
`;

const Lan_KOR = styled.div`
  border: 1px solid #000;
  width: 32px;
  aspect-ratio: 32/28;
  font-size: 12px;
  letter-spacing: -0.015em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 25px;
    font-size: 10px;
  }
`;

const Lan_ENG = styled(Lan_KOR)`
  position: absolute;
  top: 28px;
  background-color: #000;
  color: #fff;
  @media screen and (${(props) => props.theme.size.md}) {
    top: 21.875px;
  }
`;

const ToggleBtn = styled.svg`
  z-index: 100;
  position: relative;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 25px;
    height: 25px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 20px;
    height: 20px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 15px;
    height: 15px;
  }
`;

// const Shadow = styled(motion.div)`
//   display: none;
//   @media screen and (${(props) => props.theme.size.sm}) {
//     display: block;
//     position: fixed;
//     top: 0;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, 0.1);
//     opacity: 1;
//     z-index: 10;
//   }
// `;

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  // const [toggled, setToggled] = useState(false);

  // const [resize, setResize] = useState();

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setResize(window.innerWidth);
  //   });

  //   const time = setTimeout(() => {
  //     setResize(window.innerWidth);
  //   }, 0.0000000000000000001);

  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       setResize(window.innerWidth);
  //     });

  //     clearTimeout(time);
  //   };
  // }, []);

  const toggleMenu = () => {
    $(".menu").toggleClass("active");
  };

  useEffect(
    () =>
      window.matchMedia("(orientation: portrait)").matches
        ? () => toggleMenu()
        : undefined,
    [pathname]
  );

  function checkActive() {
    for (var i = 0; i < HeaderMenu.length; i++) {
      $(`.menu${i}`).css({ color: "#000" });
      if (`/${HeaderMenu[i].link}` === pathname) {
        $(`.menu${i}`).css({
          color: "rgba(0, 0, 0, 0.5)",
        });
      }
    }
  }

  useEffect(() => {
    checkActive();
    {
      pathname === "/about/ourstory" || pathname === "/about/history"
        ? setVisible(true)
        : setVisible(false);
    }
  }, [pathname]);

  useEffect(() => {
    checkActive();
  }, [visible]);

  return (
    <>
      <Nav>
        <Col>
          <ToggleBtn
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={toggleMenu}
          >
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </ToggleBtn>
        </Col>
        <Col>
          <Logo src={logo} onClick={() => navigate("/")} />
        </Col>
        <Items className="menu">
          {HeaderMenu.map((item, index) => {
            if (item.title === "about") {
              return (
                <Item
                  key={index}
                  onClick={() => setVisible(!visible)}
                  className={`menu${index}`}
                >
                  {item.title}
                </Item>
              );
            } else {
              if (item.title === "our story" || item.title === "history") {
                if (visible) {
                  return (
                    <Item
                      key={index}
                      onClick={() => {
                        navigate(`/${item.link}`);
                      }}
                      className={`menu${index} sub-menu`}
                    >
                      {item.title}
                    </Item>
                  );
                } else return null;
              } else {
                return (
                  <Item
                    key={index}
                    onClick={() => {
                      navigate(`/${item.link}`);
                    }}
                    className={`menu${index}`}
                  >
                    {item.title}
                  </Item>
                );
              }
            }
          })}
        </Items>
        <Col>
          {pathname === "/" || pathname === "/continue" ? (
            <Language>
              <Lan_KOR>KOR</Lan_KOR>
              <Link to="/continue">
                <Lan_ENG>ENG</Lan_ENG>
              </Link>
            </Language>
          ) : null}
        </Col>
      </Nav>
      {/* {toggled ? <Shadow onClick={toggleMenu}></Shadow> : null} */}
    </>
  );
};

export default Header;
