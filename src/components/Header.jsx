import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router";
import logo from "../assets/images/header_logo.png";
import { toggledAtom } from "../axios";
import { HeaderMenu } from "../data/RouteList";
import $ from "jquery";
import { motion, useAnimation } from "framer-motion";

const Nav = styled.div`
  background-color: transparent;
  padding: 0 3.85vw;
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
  width: 195px;
  object-fit: cover;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.lg}) {
    width: 100px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 160px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 140px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 100px;
  }
`;

const Items = styled(motion.ul)`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (${(props) => props.theme.size.sm}) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 120px 0;
    width: 80%;
    height: 100vh;
    background-color: #fff;
    z-index: 99;
  }
`;

const Item = styled.li`
  width: 25%;
  padding: 10px;
  text-align: center;
  font-family: ${(props) => props.theme.font.kr.medium};
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
  :first-child {
    :hover {
      text-decoration: underline;
    }
  }

  @media screen and (${(props) => props.theme.size.lg}) {
    font-size: 0.8rem;
    height: 1.5rem;
    padding: 0;
  }

  @media screen and (${(props) => props.theme.size.sm}) {
    text-align: left;
    width: 75%;
    padding: 1rem 0 2rem 1rem;
    border-bottom: 1.5px solid #000;
    font-size: 1rem;
    :nth-child(1) {
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
    padding: 0.8rem 0 1.5rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const Language = styled.div`
  @media screen and (${(props) => props.theme.size.lg}) {
    display: flex;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    transform: scale(0.7);
  }
`;

const Lan_KOR = styled.div`
  border: 1px solid black;
  width: 32px;
  height: 28px;
  padding: 5px;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props) => props.theme.size.lg}) {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
`;

const Lan_ENG = styled(Lan_KOR)`
  background-color: black;
  color: white;
`;

const MarginTop = styled.div`
  margin-top: 20vh;
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

const menu = {
  start: {
    opacity: 0,
    x: "-100%",
  },
  end: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [visible, setVisible] = useState(false);
  const [toggled, setToggled] = useRecoilState(toggledAtom);
  const menuAnimation = useAnimation();

  const [resize, setResize] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });

    const time = setTimeout(() => {
      setResize(window.innerWidth);
    }, 0.0000000000000000001);

    return () => {
      window.removeEventListener("resize", () => {
        setResize(window.innerWidth);
      });

      clearTimeout(time);
    };
  }, []);

  function toggleMenu() {
    setToggled((prev) => !prev);
    if (!toggled) {
      menuAnimation.start("end");
    } else {
      menuAnimation.start("start");
    }
  }
  useEffect(() => {
    if (resize >= 600) {
      setToggled(true);
      menuAnimation.start("end");
    } else {
      setToggled(false);
      menuAnimation.start("start");
    }
  }, [resize, pathname]);

  function checkActive() {
    for (var i = 0; i < HeaderMenu.length; i++) {
      $(`.menu${i}`).css({ color: "#000" });
      if (`/${HeaderMenu[i].link}` === pathname) {
        $(`.menu${i}`).css({
          color: "rgba(0, 0, 0, 0.6)",
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
    setToggled(false);
  }, [pathname]);

  useEffect(() => {
    checkActive();
  }, [visible]);

  return (
    <>
      {pathname !== "/continue" ? (
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
              <Logo
                src={logo}
                onClick={() => navigate("/")}
                whileHover={{
                  opacity: [1, 0.5, 1],
                  transition: { duration: 1, repeat: Infinity },
                }}
              />
            </Col>
            <Items variants={menu} animate={menuAnimation} initial={"start"}>
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
                          className={`menu${index}`}
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
              {pathname === "/" ? (
                <Language>
                  <Lan_KOR>KOR</Lan_KOR>
                  <Link to="/continue">
                    <Lan_ENG>ENG</Lan_ENG>
                  </Link>
                </Language>
              ) : null}
            </Col>
          </Nav>
          <MarginTop />
        </>
      ) : null}
    </>
  );
};

export default Header;
