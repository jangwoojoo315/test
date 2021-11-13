import React, { useState } from "react";
import { MentoBoardStyled } from "../Css/MenttoBoardStyled";
import { useHistory } from "react-router";
const MentoBoard = () => {
  const history = useHistory();
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
    } else if (e.target.className == "period-plus-btn") {
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
    } else if (e.target.className == "period-minus-btn") {
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
    setBoardInfo((prev) => ({ ...prev, deadline: true }));
  };
  const onClickModify = () => {
    setBoardInfo((prev) => ({ ...prev, regist: false }));
  };
  const onClickDelete = () => {
    setBoardInfo((prev) => ({ ...prev, delete: true }));
  };
  return (
    <MentoBoardStyled boardtitle={boardInfo.boardTitle}>
      <div className="header">
        <label className="back">
          <img
            src="/images/back-btn.png"
            alt="back-btn"
            width="30"
            onClick={() => history.push("/main")}
          />
        </label>
        <label className="header-title">멘토 글작성</label>
      </div>
      <div>
        <label className="userinfo-title">멘토 정보</label>
        <label className="id">아이디님</label>
        <label className="college">...대학교</label>
        <label className="major">산업디자인학과</label>
        <span className="temp">36℃</span>
        <progress value="36.5" max="100"></progress>
        <img
          className="temp-smile-img"
          src="./images/temp-smile.png"
          alt="temp-smile"
        />
        <span className="temp-label">신뢰온도</span>
        <span className="underbar-first"></span>
      </div>
      <div className="board">
        <input
          className="board-title"
          placeholder="제목을 입력해주세요(18자 이내)"
          onChange={onChangeBoardTitle}
          value={boardInfo.boardTitle}
        ></input>
        <textarea
          className="board-info"
          placeholder="멘토링할 과목에 대한 상세한 설명과 멘토의 설명을 입력해주세요(220자 이내)"
        ></textarea>
        <span className="underbar-second" />
      </div>
      <div className="board-option">
        <div className="people-num-option">
          <span className="people-num">수용 가능 인원수</span>
          <span className="people-num-ps">*최대 5명까지 선택 가능합니다.</span>
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
          <span className="period">멘토링 기간</span>
          <span className="period-ps">*최대 7일까지 선택 가능합니다.</span>
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
          <span className="openchat-link-title">오픈 채팅방 링크</span>
          <span className="openchat-link-input-container">
            <img src="/images/link.png" alt="link-img" />
            <input
              className="openchat-link-input"
              placeholder="오픈 채팅방 링크를 입력해주세요."
            />
          </span>
        </div>
        <div className="footer">
          {boardInfo.regist ? (
            <div className="multiple-footer">
              <button className="deadline-btn" onClick={onClickDeadline}>
                마감
              </button>
              <button className="modify-btn" onClick={onClickModify}>
                수정
              </button>
              <button className="delete-btn" onClick={onClickDelete}>
                삭제
              </button>
            </div>
          ) : (
            <button className="submit-btn" onClick={onClickSubmit}>
              등록
            </button>
          )}
        </div>
      </div>
    </MentoBoardStyled>
  );
};
export default MentoBoard;
