import React, { useState } from "react";
import { useHistory } from "react-router";
import { MainContainer } from "../Css/MainStyled";
import { getCookie } from "../Common/Cookie";
import Dialog from "@mui/material/Dialog";

const Main = () => {
  const history = useHistory();
  const [role, setRole] = useState("mento");
  const [userInfo, setUserInfo] = useState({
    id: getCookie("id"),
    college: getCookie("college"),
    major: getCookie("major"),
    temp: getCookie("temp"),
    point: getCookie("point"),
  });

  const [open, setOpen] = useState(false);

  const [evaluation, setEvaluation] = useState({
    good: false,
    soso: false,
    bad: false,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainContainer Role={role}>
      <button onClick={handleClickOpen}>open dialog</button>
      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="md"
        classes={{ paper: { borderRadius: 500 } }}
      >
        <div className="dialog-container">
          <div
            className="dialog-title"
            style={{
              paddingTop: "3%",
              paddingBottom: "3%",
              paddingLeft: "5%",
              backgroundColor: "#CAC8FF",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "#854DF3" }}>멘토링</span>
            <span style={{ margin: "0 1%" }}>평가</span>
            <img src="/images/check.png" alt="check" />
          </div>
          <div
            className="dialog-Info"
            style={{
              marginTop: "3%",
              paddingLeft: "5%",
              marginBottom: "3%",
            }}
          >
            <span>...의</span>
            <br />
            <span> ...멘토를 위한 </span>
            <br />
            <span>평가를 남겨주세요</span>
          </div>
          <div
            className="dialog-evaluation"
            style={{ paddingLeft: "5%", paddingRight: "5%" }}
          >
            <div
              className="evaluation-title"
              style={{ fontWeight: "bold", marginBottom: "2%" }}
            >
              멘토링은 어떠셨나요?
            </div>
            <div
              className="evaluation-sub-info"
              style={{ fontSize: "14px", color: "#717171", marginBottom: "3%" }}
            >
              좋아요를 많이 받을수록 신뢰 온도가 올라갑니다.
            </div>
            <div
              className="evaluation-choose"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div
                className="evaluation-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#999999",
                }}
              >
                <img
                  src={
                    evaluation.good
                      ? "images/good-click.png"
                      : "/images/good.png"
                  }
                  alt="good"
                  onClick={() => setEvaluation({ good: true })}
                />
                <span>좋아요</span>
                <span>+1</span>
              </div>
              <div
                className="evaluation-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#999999",
                }}
              >
                <img
                  src={
                    evaluation.soso
                      ? "images/soso-click.png"
                      : "/images/soso.png"
                  }
                  alt="soso"
                  onClick={() => setEvaluation({ soso: true })}
                />
                <span>괜찮아요</span>
                <span>+0</span>
              </div>
              <div
                className="evaluation-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#999999",
                }}
              >
                <img
                  src={
                    evaluation.bad ? "images/bad-click.png" : "/images/bad.png"
                  }
                  alt="bad"
                  onClick={() => setEvaluation({ bad: true })}
                />
                <span>별로에요</span>
                <span>-1</span>
              </div>
            </div>
            <button
              className="evaluation-btn"
              style={{
                color: "white",
                backgroundColor: "#854DF3",
                border: "none",
                width: "100%",
                height: "40px",
                marginBottom: "4%",
                borderRadius: "7px",
                marginTop: "3%",
              }}
              onClick={handleClose}
            >
              확인
            </button>
          </div>
        </div>
      </Dialog>
      <div className="container">
        <div className="header">
          {role === "mento" ? (
            <div className="welcome-label">
              <label>안녕하세요!</label>
              <label>알려줄 준비 되셨나요?</label>
            </div>
          ) : (
            <div className="welcome-label">
              <label>안녕하세요!</label>
              <label>배울준비 되셨나요?</label>
            </div>
          )}

          <div className="userinfo">
            <label className="mento-btn" onClick={() => setRole("mento")}>
              멘토
            </label>
            <label className="menti-btn" onClick={() => setRole("menti")}>
              멘티
            </label>
            <label className="id">{userInfo.id}님</label>
            <label className="college">{userInfo.college}</label>
            <label className="major">{userInfo.major}</label>
            <label className="point-label">
              <img src="./images/point.png" alt="point" />
              &nbsp;{userInfo.point}
            </label>
            <label className="temp-title">신뢰온도</label>
            <label className="temp-smile">
              {userInfo.temp}℃&nbsp;
              <img src="/images/temp-smile.png" alt="temp-smile" />
            </label>
            <div className="progress-bar">
              <progress value={userInfo.temp} max="100"></progress>
            </div>
          </div>
        </div>
        <div className="college-mentoring">
          <div className="college-mentoring-title-container">
            <label className="college-mentoring-title-purple">
              "{userInfo.college}"
            </label>
            <label className="college-mentoring-title-black">
              에서 진행중인 멘토링
            </label>
          </div>
        </div>
        <div className="board-list">
          <div
            className="board-detail"
            onClick={() => history.push("/mentiboard")}
          >
            <div className="board-detail-profile">사진</div>
            <div className="board-detail-content">
              <span className="board-title">포토샵 멘티 구합니다!</span>
              <span className="board-id">iee9907</span>
              <span className="board-college">서울여자대학교</span>
              <span className="board-major">산업디자인학과</span>
              <span className="board-option"></span>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="write" disabled="disabled">
            {role === "mento" ? (
              <label
                onClick={() => {
                  history.push("/mentoboard");
                }}
              >
                <img src="/images/write.png" alt="write-icon" />
              </label>
            ) : (
              <img src="/images/unwrite.png" alt="write-icon" />
            )}
          </div>
          <footer className="footer">
            <div className="list">
              <img src="/images/list-click.png" alt="list-click" />
            </div>
            <div className="point-store">
              <img
                src="/images/point-store.png"
                alt="point-store"
                onClick={() => history.push("/pointstore")}
              />
            </div>
          </footer>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
