import styled from "styled-components";

export const SignupContainer = styled.div`
  .top {
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    padding-top: 1%;
    height: 5vh;
  }
  .back-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    left: 3%;
  }
  .main-label {
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
  }
  /////////////////////회원가입 메인화면//////////////
  .main {
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
    height: 620px;
    justify-content: space-evenly;
    align-items: flex-start;

    overflow: scroll;
  }
  .id-lable {
    justify-content: flex-start;
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .id-input-container {
    display: flex;
    flex-dirction: row;
    width: 100%;
  }
  .id-input {
    width: 70%;
    height: 47px;

    padding-left: 2%;

    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .double-check-btn {
    width: 30%;
    height: 47px;
    margin-left: 1%;
    background: #f5f5f5;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 2px;
  }
  .id-double-check-error {
    display: flex;
    flex-direction: row;

    height: 15px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #ff1200;

    visibility: hidden;
  }
  .pw-label {
    height: 16px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .pw-input {
    width: 100%;
    height: 47px;

    padding-left: 2%;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .pw-explain {
    display: flex;
    flex-direction: row;

    height: 15px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: red;
    visibility: hidden;
  }
  .pw-reinput {
    width: 100%;
    height: 47px;

    padding-left: 2%;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .pw-incorrect {
    display: flex;
    flex-direction: row;

    height: 15px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #ff1200;

    visibility: hidden;
  }
  .college-name-label {
    height: 16px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .college-name-input {
    width: 100%;
    height: 47px;

    padding-left: 2%;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .college-num-label {
    height: 16px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .college-num-input {
    width: 100%;
    height: 47px;

    padding-left: 2%;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .major-label {
    height: 16px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .major-input {
    width: 100%;
    height: 47px;

    padding-left: 2%;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .profile-img-label {
    height: 16px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .profile-img-container {
    width: 100%;
    display: flex;
    flex-dirction: row;
  }
  .profile-img-input {
    width: 70%;
    height: 47px;

    padding-left: 2%;
    background: #ffffff;
    border: 1px solid #dadada;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
  }
  .profile-img-btn {
    width: 30%;
    height: 100%;

    /* 배경 */

    background: #f5f5f5;
    /* gray4 */

    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 2px;
    margin-left: 1%;
  }
  .signup-btn {
    width: 100%;
    height: 54px;

    /* black08 */
    background: ${(props) =>
      props.userinfo.id &&
      props.userinfo.password &&
      props.userinfo.password_check &&
      props.userinfo.college &&
      props.userinfo.college_num &&
      props.userinfo.major
        ? `#854DF3`
        : `#f3f3f3`};
    color: ${(props) =>
      props.userinfo.id &&
      props.userinfo.password &&
      props.userinfo.password_check &&
      props.userinfo.college &&
      props.userinfo.college_num &&
      props.userinfo.major
        ? `white`
        : `#A7A7A7`};
    border-radius: 4px;
    border: none;
  }
`;
