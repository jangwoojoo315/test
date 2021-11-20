import React, { useState } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { SignupContainer } from "../Css/SignupStyled";
import Alert from "./Alert";
const Signup = () => {
  const history = useHistory();
  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{10,16}$/;
  const testid = "testid";
  const [id, setId] = useState({
    rule: false,
    check: false,
  });
  const [password, setPassword] = useState({
    rule: false,
    check: false,
  });
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    password_check: "",
    college: "",
    college_num: "",
    major: "",
    profile: "",
  });
  const onClickCheckId = () => {
    //중복확인하는 쿼리 돌리기
    if (testid === userInfo.id) {
      setId({ rule: true, check: true });
    } else {
      setId({ rule: false, check: true });
    }
  };
  const onHandleChange = (e) => {
    if (e.target.className === "id-input") {
      setUserInfo((prev) => ({
        ...prev,
        id: e.target.value,
      }));
      setId({ rule: false, check: false });
    } else if (e.target.className === "pw-input") {
      setUserInfo((prev) => ({
        ...prev,
        password: e.target.value,
      }));

      setPassword((prev) => ({ ...prev, rule: regExp.test(e.target.value) }));
    } else if (e.target.className === "pw-reinput") {
      setUserInfo((prev) => ({
        ...prev,
        password_check: e.target.value,
      }));
      setPassword((prev) => ({
        ...prev,
        check: userInfo.password === e.target.value,
      }));
    } else if (e.target.className === "college-name-input") {
      setUserInfo((prev) => ({
        ...prev,
        college: e.target.value,
      }));
    } else if (e.target.className === "college-num-input") {
      setUserInfo((prev) => ({
        ...prev,
        college_num: e.target.value,
      }));
    } else if (e.target.className === "major-input") {
      setUserInfo((prev) => ({
        ...prev,
        major: e.target.value,
      }));
    } else if (e.target.className === "profile-img-input") {
      setUserInfo((prev) => ({
        ...prev,
        profile: e.target.value,
      }));
    }
  };

  const [uri, setUri] = useState();
  const test = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setUri(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const sampleRef = useRef();
  const signup = () => {
    if (id.rule || !id.check) {
      sampleRef.current.setOpen(true);
    } else {
      history.push("/");
    }
  };

  return (
    <SignupContainer userinfo={userInfo}>
      <Alert alert="아이디를 확인해주세요." ref={sampleRef} />

      <div className="top">
        <button className="back-btn" onClick={() => history.goBack()}>
          〈{" "}
        </button>
        <label className="main-label">회원가입</label>
      </div>
      <div className="main">
        <label className="id-lable">아이디</label>
        <div className="id-input-container">
          <input
            className="id-input"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={onHandleChange}
            value={userInfo.id}
          ></input>
          <button className="double-check-btn" onClick={onClickCheckId}>
            중복확인
          </button>
        </div>
        {Boolean(userInfo.id) ? (
          <label
            className="id-double-check-error"
            style={{ visibility: "visible" }}
          >
            {id.check ? (
              <label>
                {id.rule ? (
                  <label>
                    {" "}
                    <img
                      src="/images/alert-icon.png"
                      alt="alert-icon"
                      width="15px"
                    />
                    이미 존재하는 아이디입니다.
                  </label>
                ) : (
                  <label style={{ color: "#2F80ED" }}>
                    {" "}
                    <img
                      src="/images/signup-check.png"
                      alt="alert-icon"
                      width="15px"
                    />
                    사용 할 수 있는 아이디입니다.
                  </label>
                )}
              </label>
            ) : (
              <label>
                {" "}
                <img
                  src="/images/alert-icon.png"
                  alt="alert-icon"
                  width="15px"
                />
                아이디 중복체크를 실행해주세요.
              </label>
            )}
          </label>
        ) : (
          <label className="id-double-check-error"></label>
        )}

        <label className="pw-label">비밀번호</label>

        <input
          className="pw-input"
          type="password"
          placeholder="영문,숫자 포함 10 ~ 16자"
          onChange={onHandleChange}
          value={userInfo.password}
        ></input>
        {Boolean(userInfo.password) ? (
          <label className="pw-explain" style={{ visibility: "visible" }}>
            {password.rule ? (
              <label style={{ color: "#2F80ED" }}>
                <img
                  src="/images/signup-check.png"
                  alt="signup-check"
                  width="15px"
                />
                사용할 수 있는 비밀번호입니다.
              </label>
            ) : (
              <label>
                {" "}
                <img
                  src="/images/alert-icon.png"
                  alt="alert-icon"
                  width="15px"
                />
                조건을 만족하지 않는 비밀번호입니다.
              </label>
            )}
          </label>
        ) : (
          <label
            className="pw-explain"
            style={{ visibility: "hidden" }}
          ></label>
        )}

        <input
          className="pw-reinput"
          type="password"
          placeholder="비밀번호를 재입력해주세요"
          onChange={onHandleChange}
          value={userInfo.password_check}
        ></input>
        {Boolean(userInfo.password_check) ? (
          <label className="pw-incorrect" style={{ visibility: "visible" }}>
            {password.check ? (
              <label style={{ color: "#2F80ED" }}>
                <img
                  src="/images/signup-check.png"
                  alt="signup-check"
                  width="15px"
                />
                비밀번호가 일치합니다.
              </label>
            ) : (
              <label>
                <img
                  src="/images/alert-icon.png"
                  alt="alert-icon"
                  width="15px"
                />
                비밀번호가 일치하지 않습니다.
              </label>
            )}
          </label>
        ) : (
          <label className="pw-incorrect"></label>
        )}

        <label className="college-name-label">학교</label>

        <input
          className="college-name-input"
          placeholder="재학중인 학교를 입력해주세요"
          onChange={onHandleChange}
        ></input>

        <label className="college-num-label">학번</label>

        <input
          className="college-num-input"
          placeholder="학번을 입력해주세요"
          onChange={onHandleChange}
        ></input>

        <label className="major-label">전공</label>

        <input
          className="major-input"
          placeholder="전공을 입력해주세요"
          onChange={onHandleChange}
        ></input>

        <label className="profile-img-label">프로필사진(선택사항)</label>
        <div className="profile-img-container">
          <input
            className="profile-img-input"
            placeholder="사진 파일을 첨부해주세요"
            // type="file"
            onChange={test}
          ></input>
          <img src={uri} alt="" />
          <button className="profile-img-btn">첨부</button>
        </div>
        <button className="signup-btn" onClick={signup}>
          회원가입
        </button>
      </div>
    </SignupContainer>
  );
};
export default Signup;
