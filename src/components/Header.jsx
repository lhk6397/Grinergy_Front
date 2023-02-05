import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import logo from "../assets/images/header_logo.png";
import { HeaderMenu } from "../data/RouteList";
import $ from "jquery";
import { motion } from "framer-motion";
import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";
import { useCookies } from "react-cookie";
import useUser from "../utils/useUser";
// 43px

const MarginTop = styled.div`
  height: 17vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 12vh;
  }
`;

const Nav = styled.div`
  background-color: #fff;
  /* box-shadow: 1px 1px 5px black; */
  /* padding: 2.6875rem 3.854vw 5rem 3.854vw; */
  padding: 0 3.854vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 99;
  padding-top: ${(props) => (props.visible ? "2.6875rem" : "0rem")};
  padding-bottom: ${(props) => (props.visible ? "5rem" : "0rem")};
  height: ${(props) => (props.visible ? "15vh" : "7vh")};
  @media screen and (${(props) => props.theme.size.lg}) {
    height: 6.5vh;
    padding: 35px 3.854vw 35px 3.854vw;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 0 23px 0 18px;
  }
`;

const Col = styled(motion.div)`
  width: 25%;
  &:last-child {
    display: none;
    @media screen and (${(props) => props.theme.size.sm}) {
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
    width: fit-content;
  }
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 10.15625vw;
  position: relative;
  top: -8px;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.lg}) {
    width: 100px;
  }
  @media screen and (${(props) => props.theme.size.ss}) {
    width: 145px;
    position: static;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 100px;
  }
`;

const Items = styled.ul`
  width: fit-content;
  display: flex;
  @media screen and (${(props) => props.theme.size.sm}) {
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
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
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 45px;
    letter-spacing: -0.018em;
    margin-bottom: 25px;
    text-align: center;
    width: 100%;
    :hover {
      color: rgba(0, 0, 0, 0.5);
    }
    :nth-child(n + 3) {
      order: 1;
    }
    :nth-child(n + 7) {
      order: 0;
      font-size: 33px;
      margin-bottom: 15px;
    }
    :last-child {
      margin-bottom: 25px;
    }
    &:hover {
      text-decoration: none;
    }
  }
`;

const Language = styled.div`
  position: relative;
  font-family: ${(props) => props.theme.font.eng.condensed};
  @media screen and (${(props) => props.theme.size.sm}) {
    position: absolute;
    top: 24.55vh;
    right: 0;
  }
`;

const LanKOR = styled.div`
  border: 1px solid #000;
  width: 30px;
  aspect-ratio: 32/28;
  font-size: 10px;
  letter-spacing: -0.015em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    position: relative;
    top: 2px;
  }
  @media screen and (${(props) => props.theme.size.md}) {
    width: 25px;
    font-size: 10px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 30px;
    font-size: 10px;
  }
`;

const LanENG = styled(LanKOR)`
  position: absolute;
  top: 26px;
  background-color: #000;
  color: #fff;
  @media screen and (${(props) => props.theme.size.md}) {
    top: 21px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    position: relative;
    top: 0;
  }
`;

const ToggleBtn = styled.img`
  z-index: 100;
  position: relative;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 23px;
    transform: translateY(25%);
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 15px;
  }
`;

const AdminPageBtn = styled.button`
  cursor: pointer;
  border: 1px solid black;
  outline: none;
  padding: 5px 20px;
  margin-right: 10px;
  background-color: #fff;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    margin-right: 0;
    position: relative;
    top: 2.5px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    font-size: 10px;
    padding: 5px 10px;
  }
`;

const Header = () => {
  const data = useUser();
  const [cookies, setCookie, removeCookie] = useCookies(["ENG"]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [isENG, setIsENG] = useState(false);

  const setEngUntilExpires = () => {
    setCookie("ENG", true, {
      path: "/",
      expires: new Date(Date.now() + 604800),
    });
    setIsENG(true);
  };

  const setKorUntilExpires = () => {
    removeCookie("ENG", {
      path: "/",
    });
    setIsENG(false);
  };

  const toggleMenu = () => {
    setToggled((prev) => !prev);
    $(".menu").toggleClass("active");
  };

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
    if (window.matchMedia("(orientation: portrait)").matches) {
      setToggled(false);
      $(".menu").removeClass("active");
    }
    pathname === "/about/ourstory" || pathname === "/about/history"
      ? setVisible(true)
      : setVisible(false);
  }, [pathname]);

  useEffect(() => {
    checkActive();
  }, [visible]);

  // useEffect(() => {
  //   console.log(cookies["ENG"]);
  // }, [cookies]);
  return (
    <>
      {!pathname.includes("admin") && (
        <>
          <Nav visible={visible}>
            <Col>
              <Logo src={logo} onClick={() => navigate("/")} />
            </Col>
            <Items className="menu">
              {toggled && (
                <Item
                  onClick={() => {
                    if (pathname === "/") {
                      setToggled(false);
                      $(".menu").removeClass("active");
                    } else {
                      navigate("/");
                    }
                  }}
                >
                  homepage
                </Item>
              )}
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
              {data && data.isAdmin && (
                <AdminPageBtn onClick={() => navigate("/admin")}>
                  Admin Page
                </AdminPageBtn>
              )}
              {pathname === "/" || pathname === "/continue" ? (
                <Language>
                  <Link to="/">
                    <LanKOR onClick={setKorUntilExpires}>
                      <span>KOR</span>
                    </LanKOR>
                  </Link>
                  <Link to="/continue">
                    <LanENG onClick={setEngUntilExpires}>
                      <span>ENG</span>
                    </LanENG>
                  </Link>
                </Language>
              ) : null}
            </Col>
            <Col>
              {!toggled ? (
                <ToggleBtn src={hamburger} onClick={toggleMenu} />
              ) : (
                <ToggleBtn src={close} onClick={toggleMenu} />
              )}
            </Col>
          </Nav>
          <MarginTop />
        </>
      )}
      {/* {toggled ? <Shadow onClick={toggleMenu}></Shadow> : null} */}
    </>
  );
};

export default Header;
