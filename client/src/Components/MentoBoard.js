import React, { useState } from "react";
import { MentoBoardStyled } from "../Css/MenttoBoardStyled";
import { useHistory } from "react-router";
import Alert from "./Alert";
import { useRef } from "react";
import { getCookie } from "../Common/Cookie";
const MentoBoard = () => {
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

  const onChangeBoardTitle = (e) => {
    setBoardInfo((prev) => ({ ...prev, boardTitle: e.target.value }));
  };
  const increaseNum = (e) => {
    if (e.target.className === "people-plus-btn") {
      if (boardInfo.peopleNum < 5) {
        setBoardInfo((prev) => ({ ...prev, peopleNum: prev.peopleNum + 1 }));
      }
    } else if (e.target.className === "period-plus-btn") {
      if (boardInfo.period < 7) {
        setBoardInfo((prev) => ({ ...prev, period: prev.period + 1 }));
      }
    }
  };
  const decreaseNum = (e) => {
    if (e.target.className === "people-minus-btn") {
      if (boardInfo.peopleNum > 1) {
        setBoardInfo((prev) => ({
          ...prev,
          peopleNum: prev.peopleNum - 1,
        }));
      }
    } else if (e.target.className === "period-minus-btn") {
      if (boardInfo.period > 1) {
        setBoardInfo((prev) => ({ ...prev, period: prev.period - 1 }));
      }
    }
  };
  const onClickSubmit = () => {
    if (boardInfo.boardTitle) {
      setBoardInfo((prev) => ({ ...prev, regist: true }));
    }
  };
  const onClickDeadline = () => {
    if (!boardInfo.deadline) {
      setBoardInfo((prev) => ({ ...prev, deadline: true }));
      sampleRef.current.setOpen(true);
    }
  };
  const onClickModify = () => {
    if (!boardInfo.deadline)
      setBoardInfo((prev) => ({ ...prev, regist: false }));
  };
  const sampleRef = useRef();
  const onClickDelete = () => {
    setBoardInfo((prev) => ({ ...prev, delete: true }));
  };

  return (
    <MentoBoardStyled
      boardtitle={boardInfo.boardTitle}
      regist={boardInfo.regist}
      deadline={boardInfo.deadline}
    >
      <Alert alert="?????? ?????? ?????? ????????????." ref={sampleRef} />
      <div className="header">
        <label className="back">
          <img
            src="/images/back-btn.png"
            alt="back-btn"
            width="30"
            onClick={() => history.push("/main")}
          />
        </label>
        <label className="header-title">?????? ?????????</label>
      </div>
      <div>
        <label className="userinfo-title">?????? ??????</label>
        <label className="id">{userInfo.id}???</label>
        <label className="college">{userInfo.college}</label>
        <label className="major">{userInfo.major}</label>
        <span className="temp">{userInfo.temp}???</span>
        <progress value={userInfo.temp} max="100"></progress>
        <img
          className="temp-smile-img"
          src="./images/temp-smile.png"
          alt="temp-smile"
        />
        <span className="temp-label">????????????</span>
        <span className="underbar-first"></span>
      </div>
      <div className="board">
        <div className="board-title-container">
          <img
            className="deadline-img"
            src="/images/deadline-btn.png"
            alt="deadline-btn"
            width="40px"
          />
          <input
            className="board-title"
            placeholder="????????? ??????????????????(18??? ??????)"
            onChange={onChangeBoardTitle}
            value={boardInfo.boardTitle}
            readOnly={boardInfo.regist ? true : false}
          ></input>
        </div>
        <textarea
          className="board-info"
          placeholder="???????????? ????????? ?????? ????????? ????????? ????????? ????????? ??????????????????(220??? ??????)"
          readOnly={boardInfo.regist ? true : false}
        ></textarea>
        <span className="underbar-second" />
      </div>
      <div className="board-option">
        <div className="people-num-option">
          <span className="people-num">?????? ?????? ?????????</span>
          <span className="people-num-ps">*?????? 5????????? ?????? ???????????????.</span>
          <img
            className="people-minus-btn"
            src={
              boardInfo.peopleNum > 1
                ? "./images/activation-minus.png"
                : "./images/disabled-minus.png"
            }
            alt="minus-btn"
            onClick={decreaseNum}
          ></img>
          <span className="people-num-choose">{boardInfo.peopleNum}</span>
          <img
            className="people-plus-btn"
            src={
              boardInfo.peopleNum < 5
                ? "./images/activation-plus.png"
                : "./images/disabled-plus.png"
            }
            alt="plus-btn"
            onClick={increaseNum}
          ></img>
          <span className="underbar-third"></span>
        </div>
        <div className="period-option">
          <span className="period">????????? ??????</span>
          <span className="period-ps">*?????? 7????????? ?????? ???????????????.</span>
          <img
            className="period-minus-btn"
            src={
              boardInfo.period > 1
                ? "./images/activation-minus.png"
                : "./images/disabled-minus.png"
            }
            alt="minus-btn"
            onClick={decreaseNum}
          ></img>
          <span className="period-num-choose">{boardInfo.period}</span>
          <img
            className="period-plus-btn"
            src={
              boardInfo.period < 7
                ? "./images/activation-plus.png"
                : "./images/disabled-plus.png"
            }
            alt="plus-btn"
            onClick={increaseNum}
          ></img>
          <span className="underbar-fourth"></span>
        </div>
        <div className="openchat-option">
          <span className="openchat-link-title">?????? ????????? ??????</span>
          <span className="openchat-link-input-container">
            <img src="/images/link.png" alt="link-img" />
            <input
              className="openchat-link-input"
              placeholder="?????? ????????? ????????? ??????????????????."
              readOnly={boardInfo.regist ? true : false}
            />
          </span>
        </div>
        <div className="footer">
          {boardInfo.regist ? (
            <div className="multiple-footer">
              <button className="deadline-btn" onClick={onClickDeadline}>
                ??????
              </button>
              <button className="modify-btn" onClick={onClickModify}>
                ??????
              </button>
              <button className="delete-btn" onClick={onClickDelete}>
                ??????
              </button>
            </div>
          ) : (
            <button className="submit-btn" onClick={onClickSubmit}>
              ??????
            </button>
          )}
        </div>
      </div>
    </MentoBoardStyled>
  );
};
export default MentoBoard;
