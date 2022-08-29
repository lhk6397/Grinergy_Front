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
  padding: 43px 3.854vw;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 99;
  @media screen and (${(props) => props.theme.size.md}) {
    padding: 72px 64px;
  }
`;

const Col = styled(motion.div)`
  width: 25%;
  &:last-child {
    display: none;
    @media screen and (${(props) => props.theme.size.md}) {
      display: block;
      width: fit-content;
    }
  }
  &:nth-child(3) {
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

const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 10.15625vw;
  aspect-ratio: 195/25;
  /* object-fit: cover; */
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.lg}) {
    width: 100px;
  }

  @media screen and (${(props) => props.theme.size.md}) {
    width: 420px;
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
  @media screen and (${(props) => props.theme.size.md}) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 72px 64px;
    width: 100%;
    height: 100vh;
    background-color: #fff;
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
  /* @media screen and (${(props) => props.theme.size.md}) {
  } */
  @media screen and (${(props) => props.theme.size.md}) {
    font-size: 142px;
    letter-spacing: -0.018em;
    margin-bottom: 218px;
    text-align: center;
    width: 100%;
    :nth-child(2) {
      /* margin-top: 20%; */
      /* order: -1; */
    }
    :nth-child(n + 3) {
      order: 1;
    }
    :nth-child(n + 6) {
      order: 0;
      font-size: 104px;
      margin-bottom: 138px;
    }
    :last-child {
      margin-bottom: 218px;
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
  @media screen and (${(props) => props.theme.size.md}) {
    position: absolute;
    top: 612px;
    right: 0;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    transform: scale(0.7);
  }
`;

const Lan_KOR = styled.div`
  border: 1px solid #000;
  width: 30px;
  aspect-ratio: 32/28;
  font-size: 10px;
  letter-spacing: -0.015em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.md}) {
    width: 64px;
    font-size: 15px;
  }
`;

const Lan_ENG = styled(Lan_KOR)`
  position: absolute;
  top: 26px;
  background-color: #000;
  color: #fff;
  @media screen and (${(props) => props.theme.size.md}) {
    top: 57.875px;
  }
`;

const ToggleBtn = styled.svg`
  z-index: 100;
  position: relative;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.md}) {
    height: 72px;
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
  const [toggled, setToggled] = useState(false);

  const toggleMenu = () => {
    setToggled((prev) => !prev);
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
          <Logo src={logo} onClick={() => navigate("/")} />
        </Col>
        <Items className="menu">
          {toggled ? (
            <Item
              onClick={() => {
                navigate(`/`);
              }}
            >
              homepage
            </Item>
          ) : null}
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
              <Link to="/">
                <Lan_KOR>KOR</Lan_KOR>
              </Link>
              <Link to="/continue">
                <Lan_ENG>ENG</Lan_ENG>
              </Link>
            </Language>
          ) : null}
        </Col>
        <Col>
          {!toggled ? (
            <ToggleBtn
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </ToggleBtn>
          ) : (
            <ToggleBtn
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </ToggleBtn>
          )}
        </Col>
      </Nav>
      {/* {toggled ? <Shadow onClick={toggleMenu}></Shadow> : null} */}
    </>
  );
};

export default Header;
