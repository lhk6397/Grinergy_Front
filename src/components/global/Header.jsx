import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useLocation, useNavigate } from "react-router";
import logo from "../../assets/images/header_logo.png";
import { headerMenuList } from "../../data/headerMenuList";
import { motion } from "framer-motion";
import hamburger from "../../assets/images/hamburger.png";
import { useCookies } from "react-cookie";
import useUser from "../../utils/useUser";
import MobileSidebar from "./MobileSidebar";
import FloatingLanguageBox from "./FloatingLanguageBox";
import useWindowSize from "../../utils/useWindowSize";
import { LanguageContext } from "../../context/LanguageContext";

const MarginTop = styled.div`
  height: 17vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 12vh;
  }
`;

const Nav = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.854vw;
  width: 100%;
  /* padding-top: 2.6875rem; */
  /* padding-bottom: ${(props) => (!props.isSubVisible ? "2.6875rem" : "5rem")};
  height: ${(props) => (!props.isSubVisible ? "10.5vh" : "15vh")}; */
  /* padding-bottom: 3.5rem; */
  height: 10vh;
  @media screen and (${(props) => props.theme.size.sm}) {
    height: 7.5vh;
    padding: 0 23px 0 18px;
  }
`;

const Col = styled(motion.div)`
  width: 33%;
  &:nth-child(3) {
    display: flex;
    justify-content: end;
  }
  /* @media screen and (${(props) => props.theme.size.sm}) {
    &:nth-child(2) {
      display: none;
    }
     &:nth-child(3) {
      width: 50%;
    } 
  } */
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 9.15625vw;
  position: relative;
  top: -6px;
  cursor: pointer;
  @media screen and (${(props) => props.theme.size.sm}) {
    width: 145px;
    position: static;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 100px;
  }
`;

const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.666vw;
  z-index: 10;

  @media screen and (${(props) => props.theme.size.sm}) {
    display: none;
  }
`;

const Item = styled.li`
  text-align: center;
  font-family: ${(props) => props.theme.font.eng.condensed};
  font-size: 1.1458vw;
  color: ${(props) => (props.isMatch ? "rgba(0,0,0,0.5)" : "#000")};
  cursor: pointer;
  z-index: 20;
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.isSub &&
    css`
      position: absolute;
      top: 7.5vh;
      left: 43%;
      &:nth-child(3) {
        left: 53.5%;
      }
    `}

  @media screen and (${(props) => props.theme.size.sm}) {
    font-size: 45px;
    letter-spacing: -0.018em;
    margin-bottom: 25px;
    text-align: center;
    width: 100%;
    :hover {
      color: rgba(0, 0, 0, 0.5);
    }
    &:hover {
      text-decoration: none;
    }
  }
`;

const Language = styled.div`
  background-color: #fff;
  font-family: ${(props) => props.theme.font.eng.condensed};
  position: relative;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: none;
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
  @media screen and (${(props) => props.theme.size.lg}) {
    width: 25px;
  }
`;

const LanENG = styled(LanKOR)`
  position: absolute;
  top: 26px;
  background-color: #000;
  color: #fff;
  @media screen and (${(props) => props.theme.size.lg}) {
    top: 21px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    position: relative;
    top: 0;
  }
`;

const ToggleBtn = styled.img`
  display: none;
  z-index: 20;
  position: relative;
  object-fit: contain;
  @media screen and (${(props) => props.theme.size.sm}) {
    display: block;
    width: 30px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    width: 23px;
  }
`;

const AdminPageBtn = styled.button`
  cursor: pointer;
  border: 1px solid black;
  outline: none;
  padding: 5px 20px;
  margin-right: 10px;
  background-color: #fff;
  font-family: ${(props) => props.theme.font.eng.condensed};
  color: #000;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  span {
    position: relative;
    bottom: -2px;
  }
  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media screen and (${(props) => props.theme.size.lg}) {
    padding: 2.5px 15px;
  }
  @media screen and (${(props) => props.theme.size.sm}) {
    padding: 10px 20px;
    font-size: 10px;
  }
  @media screen and (${(props) => props.theme.size.xs}) {
    padding: 0px 5px;
  }
`;

const Header = () => {
  const data = useUser();
  console.log(data);
  const windowSize = useWindowSize();
  const [cookies, setCookie, removeCookie] = useCookies(["KOR"]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubVisible, setIsSubVisible] = useState(false);
  const { setIsENG } = useContext(LanguageContext);

  const setEngUntilExpires = () => {
    removeCookie("KOR", {
      path: "/",
    });
    setIsENG(true);
  };

  const setKorUntilExpires = () => {
    setCookie("KOR", true, {
      path: "/",
      expires: new Date(Date.now() + 604800),
    });
    setIsENG(false);
  };

  useEffect(() => {
    if (windowSize > 652) {
      setIsOpen(false);
    }
  }, [windowSize, isOpen]);

  useEffect(() => {
    setIsOpen(isOpen ? false : isOpen);
    if (pathname !== "/about/ourstory" && pathname !== "/about/history") {
      setIsSubVisible(isSubVisible ? false : isSubVisible);
    }
  }, [pathname]);

  return (
    <>
      {!pathname.includes("admin") && (
        <>
          {isOpen && (
            <MobileSidebar
              setIsOpen={setIsOpen}
              isSubVisible={isSubVisible}
              setIsSubVisible={setIsSubVisible}
            />
          )}
          <Nav isSubVisible={isSubVisible}>
            <Col>
              <Logo src={logo} onClick={() => navigate("/")} alt="logo" />
            </Col>
            <Col>
              <Items isSubVisible={isSubVisible}>
                {headerMenuList.map(
                  (menuItem, idx) =>
                    menuItem.title.toLowerCase() !== "homepage" &&
                    (menuItem.title.toLowerCase() === "our story" ||
                    menuItem.title.toLowerCase() === "history" ? (
                      isSubVisible && (
                        <Item
                          key={idx}
                          isSub
                          isMatch={pathname === menuItem.link}
                          onClick={() => navigate(menuItem.link)}
                        >
                          {menuItem.title}
                        </Item>
                      )
                    ) : menuItem.title.toLowerCase() === "about" ? (
                      <Item
                        key={idx}
                        isMatch={pathname === menuItem.link}
                        onClick={() => setIsSubVisible(!isSubVisible)}
                      >
                        {menuItem.title}
                      </Item>
                    ) : (
                      <Item
                        key={idx}
                        isMatch={pathname === menuItem.link}
                        onClick={() => navigate(menuItem.link)}
                      >
                        {menuItem.title}
                      </Item>
                    ))
                )}
              </Items>
            </Col>

            <Col>
              {data && data.isAdmin && (
                <AdminPageBtn onClick={() => navigate("/admin")}>
                  <span>Admin Page</span>
                </AdminPageBtn>
              )}
              {pathname === "/" && (
                <Language>
                  <LanKOR onClick={setKorUntilExpires}>
                    <span>KOR</span>
                  </LanKOR>
                  <LanENG onClick={setEngUntilExpires}>
                    <span>ENG</span>
                  </LanENG>
                </Language>
              )}
            </Col>

            {/* MOBILE */}
            <ToggleBtn
              src={hamburger}
              alt="menu-button"
              onClick={() => setIsOpen(true)}
            />
            <FloatingLanguageBox
              setKorUntilExpires={setKorUntilExpires}
              setEngUntilExpires={setEngUntilExpires}
            />
          </Nav>
          {!(pathname === "/") && <MarginTop />}
        </>
      )}
    </>
  );
};

export default Header;
