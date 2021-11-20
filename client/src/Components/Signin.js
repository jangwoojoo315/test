import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { SigninContainer } from "../Css/SigninStyled";
import { setCookie } from "../Common/Cookie";
import axios from "axios";
const Signin = () => {
  const history = useHistory();
  const [temp, setTemp] = useState("");
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    college: "한국기술교육대학교",
    major: "컴퓨터공학과",
    temp: 36,
    point: 1000,
  });
  const URL =
    "https://58lried7wc.execute-api.ap-northeast-2.amazonaws.com/pro/api/user/detail/1";
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response);
        setTemp(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);
  console.log(temp);
  const onHandleChange = (e) => {
    if (e.target.name === "id") {
      setUserInfo({
        id: e.target.value,
        password: userInfo.password,
        college: userInfo.college,
        major: userInfo.major,
        temp: userInfo.temp,
        point: userInfo.point,
      });
    } else if (e.target.name === "pw") {
      setUserInfo({
        id: userInfo.id,
        password: e.target.value,
        college: userInfo.college,
        major: userInfo.major,
        temp: userInfo.temp,
        point: userInfo.point,
      });
    }
  };
  const signin = () => {
    setCookie("id", userInfo.id);
    setCookie("college", userInfo.college);
    setCookie("major", userInfo.major);
    setCookie("temp", userInfo.temp);
    setCookie("point", userInfo.point);
    history.push("./main");
  };
  return (
    <SigninContainer>
      <div className="main">
        <input
          type="text"
          name="id"
          className="signin-input"
          placeholder="아이디를 입력하세요"
          value={userInfo.id || ""}
          onChange={onHandleChange}
        ></input>
        <br />
        <input
          type="password"
          name="pw"
          className="logout-input"
          placeholder="비밀번호를 입력하세요"
          value={userInfo.password || ""}
          onChange={onHandleChange}
        ></input>
        <br />
        <button className="signin-btn" onClick={signin}>
          로그인
        </button>
        <br />
        <label className="signup-btn" onClick={() => history.push("/signup")}>
          회원가입
        </label>
      </div>
    </SigninContainer>
  );
};

export default Signin;
