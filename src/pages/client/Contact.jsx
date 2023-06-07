import React, { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import "moment/locale/fr";
import "moment-timezone";

import * as C from "../../styles/client/contact.styles";
import { LanguageContext } from "../../context/LanguageContext";
import useInterval from "../../utils/useInterval";

const Contact = () => {
  const { isENG } = useContext(LanguageContext);
  const [currTime, setCurrTime] = useState(Date.now());

  useInterval(() => {
    setCurrTime(Date.now());
  }, 3000);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Contact`;
  }, []);
  return (
    <C.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -window.innerHeight / 2 }}
      transition={{ duration: 0.5 }}
    >
      <C.Wrapper>
        <C.Phrase>Connect with us</C.Phrase>
        <C.Info>
          <C.Row>
            <C.Box>
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <C.Country>SEOUL</C.Country>
                  <C.Purpose>Headquarters</C.Purpose>
                  <C.Time>
                    <Moment format="hh" tz="Asia/Seoul">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="Asia/Seoul">
                      {currTime}
                    </Moment>
                  </C.Time>
                </>
              ) : (
                <>
                  <div>
                    <C.Country>SEOUL</C.Country>
                    <C.Time>
                      <Moment format="hh" tz="Asia/Seoul">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="Asia/Seoul">
                        {currTime}
                      </Moment>
                    </C.Time>
                  </div>
                  <C.Purpose>Headquarters</C.Purpose>
                </>
              )}
            </C.Box>
            <C.Box>
              {!isENG && <C.SPAN eng={false}>서울특별시 금천구</C.SPAN>}
              {isENG ? (
                <C.SPAN eng>205-27, Gasan Digital 1-ro,</C.SPAN>
              ) : (
                <C.SPAN eng={false}>가산 디지털 1로 205-27</C.SPAN>
              )}

              {isENG ? (
                <C.SPAN eng>Gasan Al tower 402</C.SPAN>
              ) : (
                <C.SPAN eng={false}>가산 Al 타워 402호</C.SPAN>
              )}

              <C.Email>info@grinergy.co.kr</C.Email>
              <C.ContactNum>+82. 2. 587.7127</C.ContactNum>
            </C.Box>
          </C.Row>

          <C.Row>
            <C.Box>
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <C.Country>US</C.Country>
                  <C.Purpose>Business office</C.Purpose>
                  <C.Time>
                    <Moment format="hh" tz="America/Los_Angeles">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="America/Los_Angeles">
                      {currTime}
                    </Moment>
                  </C.Time>
                </>
              ) : (
                <>
                  <div>
                    <C.Country>US</C.Country>
                    <C.Time>
                      <Moment format="hh" tz="America/Los_Angeles">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="America/Los_Angeles">
                        {currTime}
                      </Moment>
                    </C.Time>
                  </div>
                  <C.Purpose>Business office</C.Purpose>
                </>
              )}
            </C.Box>
            <C.Box>
              <C.SPAN eng>3003 N. 1st st, #305,</C.SPAN>
              <C.SPAN eng>San Jose, CA 95134</C.SPAN>
              <C.Email>dsoutherton@grinergy.co.kr</C.Email>
              <C.ContactNum>+1. 310. 866. 3777</C.ContactNum>
            </C.Box>
          </C.Row>

          <C.Row>
            <C.Box>
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <C.Country>US</C.Country>
                  <C.Purpose>R&D lab</C.Purpose>
                  <C.Time>
                    <Moment format="hh" tz="America/New_York">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="America/New_York">
                      {currTime}
                    </Moment>
                  </C.Time>
                </>
              ) : (
                <>
                  <div>
                    <C.Country>US</C.Country>
                    <C.Time>
                      <Moment format="hh" tz="America/New_York">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="America/New_York">
                        {currTime}
                      </Moment>
                    </C.Time>
                  </div>
                  <C.Purpose>R&D lab</C.Purpose>
                </>
              )}
            </C.Box>
            <C.Box>
              <C.SPAN eng>1395 Main st, second floor,</C.SPAN>
              <C.SPAN eng>Waltham, MA 02451</C.SPAN>
              <C.Email>mdcho@grinergy.co.kr</C.Email>
            </C.Box>
          </C.Row>

          <C.Row>
            <C.Box>
              {window.matchMedia("(orientation: landscape)").matches ? (
                <>
                  <C.Country>FINLAND</C.Country>
                  <C.Purpose>GRINERGY smart oy</C.Purpose>
                  <C.Time>
                    <Moment format="hh" tz="Europe/Helsinki">
                      {currTime}
                    </Moment>
                    <span>:</span>
                    <Moment format="mm a" tz="Europe/Helsinki">
                      {currTime}
                    </Moment>
                  </C.Time>
                </>
              ) : (
                <>
                  <div>
                    <C.Country>FINLAND</C.Country>
                    <C.Time>
                      <Moment format="hh" tz="Europe/Helsinki">
                        {currTime}
                      </Moment>
                      <span>:</span>
                      <Moment format="mm a" tz="Europe/Helsinki">
                        {currTime}
                      </Moment>
                    </C.Time>
                  </div>
                  <C.Purpose>GRINERGY smart oy</C.Purpose>
                </>
              )}
            </C.Box>
            <C.Box>
              <C.SPAN eng>Salomonkatu 17A third floor,</C.SPAN>
              <C.SPAN eng>00100 Helsinki</C.SPAN>
              <C.Email>shjeon@grinergy.co.kr</C.Email>
              <C.ContactNum>+358. 9. 682. 9. 4917</C.ContactNum>
            </C.Box>
          </C.Row>
        </C.Info>
      </C.Wrapper>
    </C.Container>
  );
};

export default Contact;
