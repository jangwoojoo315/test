import React, { useState } from "react";
import { MentiBoardStyled } from "../Css/MentiBoardStyled";
import { useHistory } from "react-router";
import Alert from "./Alert";
import { useRef } from "react";
import { getCookie } from "../Common/Cookie";

const MentiBoard = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    id: getCookie("id"),
    college: getCookie("college"),
    major: getCookie("major"),
    temp: getCookie("temp"),
    point: getCookie("point"),
  });
  const [boardInfo, setBoardInfo] = useState({
    boardTitle: "",
    peopleNum: 1,
    period: 1,
    regist: false,
    deadline: false,
    modify: false,
    delete: false,
  });
  const [regist, setRegist] = useState(false);

  const sampleRef = useRef();
  const [alert, setAlert] = useState("");
  const onClickLinkCopy = () => {
    setAlert("링크복사가 완료되었습니다.");
    sampleRef.current.setOpen(true);
  };
  const onClickRegist = () => {
    setAlert("멘토링 신청이 완료되었습니다.");
    setRegist(true);
    sampleRef.current.setOpen(true);
  };

  return (
    <MentiBoardStyled regist={regist}>
      <Alert alert={alert} ref={sampleRef} />
      <div className="container">
        <div className="header">
          <label className="back">
            <img
              src="/images/back-btn.png"
              alt="back-btn"
              width="30"
              onClick={() => history.push("/main")}
            />
          </label>
          <label className="header-title">멘토링 상세</label>
        </div>
        <div>
          <label className="userinfo-title">멘토 정보</label>
          <label className="id">{userInfo.id}님</label>
          <label className="college">{userInfo.college}</label>
          <label className="major">{userInfo.major}</label>
          <span className="temp">{userInfo.temp}℃</span>
          <progress value={userInfo.temp} max="100"></progress>
          <img
            className="temp-smile-img"
            src="./images/temp-smile.png"
            alt="temp-smile"
          />
          <span className="temp-label">신뢰온도</span>
          <span className="underbar-first"></span>
        </div>
        <div className="board">
          <div className="board-title-container">
            <input
              className="board-title"
              value={boardInfo.boardTitle}
              readOnly
            ></input>
          </div>
          <textarea className="board-info" readOnly></textarea>
          <span className="underbar-second" />
        </div>
        <div className="board-option">
          <div className="people-num-option">
            <img src="./images/human-icon.png" alt="human-icon" />
            <span className="people-num">인원 수</span>
            <span className="people-num-choose">{boardInfo.peopleNum}명</span>
            <span className="underbar-third"></span>
          </div>
          <div className="period-option">
            <img
              src="./images/calendar.png"
              alt="calendar-icon"
              width="17"
              height="20"
            />
            <span className="period">멘토링 기간</span>

            <span className="period-num-choose">{boardInfo.period}일</span>
            <span className="underbar-fourth"></span>
          </div>
          <div className="footer">
            <button className="link-copy-btn" onClick={onClickLinkCopy}>
              링크 복사
            </button>
            <button className="regist-btn" onClick={onClickRegist}>
              신청하기
            </button>
          </div>
        </div>
      </div>
    </MentiBoardStyled>
  );
};
export default MentiBoard;
