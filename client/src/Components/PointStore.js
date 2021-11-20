import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import { PointStoreContainer } from "../Css/PointStoreStyled";
import { getCookie, setCookie } from "../Common/Cookie";
import Alert from "./Alert";
const PointStore = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    id: getCookie("id"),
    college: getCookie("college"),
    major: getCookie("major"),
    point: getCookie("point"),
  });
  const sampleRef = useRef();
  const onClickBuy = (cash) => {
    sampleRef.current.setOpen(true);
    setCookie("point", userInfo.point - cash);
    setUserInfo((prev) => ({ ...prev, point: prev.point - cash }));
  };

  return (
    <PointStoreContainer>
      <Alert alert="구매 완료 되었습니다." ref={sampleRef} />
      <div className="container">
        <div className="header">스토어</div>
        <div className="userinfo-container">
          <div className="profile"></div>
          <div className="userinfo">
            <div className="id">{userInfo.id}님</div>
            <div className="college">{userInfo.college}</div>
            <div className="major">{userInfo.major}</div>
          </div>
          <div className="point">
            <img src="/images/point.png" alt="point" width="15" height="15" />
            <div>{userInfo.point}</div>
          </div>
        </div>

        <div className="gs25-container">
          <div className="gs25-title-container">
            <img className="gs25-title-img" src="/images/gs25.png" alt="gs25" />
            <span className="gs25-title">GS25</span>
          </div>

          <div className="gs25">
            <div className="gs25-info-container">
              <img className="gs25-img" src="/images/gs25.png" alt="gs25" />
              <div className="gs25-info">모바일 금액권 1,000원</div>
            </div>
            <img
              className="gs25-1000-btn"
              src={
                userInfo.point >= 1000
                  ? "/images/gs-possible.png"
                  : "/images/buy-impossible.png"
              }
              alt="gsbtn"
              onClick={() => onClickBuy(1000)}
            />
          </div>
          <div className="gs25">
            <div className="gs25-info-container">
              <img className="gs25-img" src="/images/gs25.png" alt="gs25" />
              <div className="gs25-info">모바일 금액권 3,000원</div>
            </div>
            <img
              className="gs25-1000-btn"
              src={
                userInfo.point >= 3000
                  ? "/images/gs-possible.png"
                  : "/images/buy-impossible.png"
              }
              alt="gsbtn"
            />
          </div>
          <div className="gs25">
            <div className="gs25-info-container">
              <img className="gs25-img" src="/images/gs25.png" alt="gs25" />
              <div className="gs25-info">모바일 금액권 5,000원</div>
            </div>
            <img
              className="gs25-1000-btn"
              src={
                userInfo.point >= 5000
                  ? "/images/gs-possible.png"
                  : "/images/buy-impossible.png"
              }
              alt="gsbtn"
            />
          </div>
        </div>

        <div className="cultureland-container">
          <div className="cultureland-title-container">
            <img
              className="cultureland-title-img"
              src="/images/cultureland.png"
              alt="cultureland"
            />
            <span className="cultureland-title">문화상품권</span>
          </div>

          <div className="cultureland">
            <div className="cultureland-info-container">
              <img
                className="cultureland-img"
                src="/images/cultureland-label.png"
                alt="cultureland"
              />
              <div className="cultureland-info">모바일 금액권 1,000원</div>
            </div>
            <img
              className="cultureland-1000-btn"
              src={
                userInfo.point >= 1000
                  ? "/images/cultureland-possible.png"
                  : "/images/buy-impossible.png"
              }
              alt="cultureland"
            />
          </div>
          <div className="cultureland">
            <div className="cultureland-info-container">
              <img
                className="cultureland-img"
                src="/images/cultureland-label.png"
                alt="cultureland"
              />
              <div className="cultureland-info">모바일 금액권 1,000원</div>
            </div>
            <img
              className="cultureland-1000-btn"
              src={
                userInfo.point >= 3000
                  ? "/images/cultureland-possible.png"
                  : "/images/buy-impossible.png"
              }
              alt="cultureland"
            />
          </div>
          <div className="cultureland">
            <div className="cultureland-info-container">
              <img
                className="cultureland-img"
                src="/images/cultureland-label.png"
                alt="cultureland"
              />
              <div className="cultureland-info">모바일 금액권 1,000원</div>
            </div>
            <img
              className="cultureland-1000-btn"
              src={
                userInfo.point >= 5000
                  ? "/images/cultureland-possible.png"
                  : "/images/buy-impossible.png"
              }
              alt="cultureland"
            />
          </div>
          <div className="blank"></div>
        </div>

        <footer className="footer">
          <div className="list">
            <img
              src="/images/list.png"
              alt="list-click"
              onClick={() => history.push("/main")}
            />
          </div>
          <div className="point-store">
            <img src="/images/point-store-click.png" alt="point-store" />
          </div>
        </footer>
      </div>
    </PointStoreContainer>
  );
};
export default PointStore;
