import styled from "styled-components";

export const MentoBoardStyled = styled.div`
  input::placeholder {
    color: #dadada;
  }
  textarea::placeholder {
    color: #dadada;
  }
  .header {
    display: flex;
    flex-direction: row;
    padding-top: 2%;

    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  }

  .header-title {
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    /* black01 */

    color: #121212;
    margin: 0 auto;
    padding-right: 4%;
  }
  ///////////////////////멘토정보///////////////
  .userinfo-title {
    position: absolute;
    height: 18px;
    left: 20px;
    top: 55px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3px;

    /* black01 */

    color: #2c2c2c;
  }
  .id {
    position: absolute;
    height: 18px;
    left: 110px;
    top: 85px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3px;

    /* black01 */

    color: #2c2c2c;
  }
  .college {
    position: absolute;
    height: 14px;
    left: 110px;
    top: 110px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;

    /* grey01 */

    color: #999999;
  }
  .major {
    position: absolute;
    height: 14px;
    left: 110px;
    top: 126px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;

    /* grey01 */

    color: #999999;
  }
  .temp {
    position: absolute;
    width: 34px;
    height: 18px;
    left: 295px;
    top: 85px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
  }
  progress {
    -webkit-appearance: none;
    position: absolute;
    top: 108px;
    left: 270px;
    width: 80px;
    height: 7px;
    ::-webkit-progress-bar {
      background-color: rgba(133, 77, 243, 0.1);
      border-radius: 100px;
    }
    ::-webkit-progress-value {
      background-color: #854df3;
      border-radius: 100px;
    }
  }
  .temp-smile-img {
    position: absolute;
    width: 23px;
    height: 23px;
    left: 355px;
    top: 88px;
  }

  .temp-label {
    position: absolute;
    height: 14px;
    left: 343px;
    top: 122px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;

    display: flex;
    align-items: flex-end;

    color: #999999;
  }
  .underbar-first {
    position: absolute;
    width: 100%;
    left: 0;
    top: 170px;
    height: 5px;
    background-color: #f2f3f7;
  }

  .board-title {
    position: absolute;
    width: 90%;
    left: 20px;
    top: 195px;
    padding-bottom: 2%;
    border: none;
    border-bottom: 1px solid #f3f3f3;
    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  .board-info {
    position: absolute;
    width: 85%;
    height: 120px;
    left: 20px;
    top: 235px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    border: none;
  }
  .underbar-second {
    position: absolute;
    width: 100%;
    left: 0;
    top: 395px;
    height: 8px;
    background-color: #f2f3f7;
  }
  ////////////////수용 가능 인원 수////////////////////
  .people-num {
    position: absolute;
    height: 16px;
    left: 20px;
    top: 430px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .people-num-ps {
    position: absolute;
    height: 24px;
    left: 20px;
    top: 440px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
  }
  .people-minus-btn {
    position: absolute;
    height: 24px;
    left: 280px;
    top: 430px;
  }
  .people-num-choose {
    position: absolute;
    height: 24px;
    left: 320px;
    top: 430px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
  .people-plus-btn {
    position: absolute;
    height: 24px;
    left: 340px;
    top: 430px;
  }
  .underbar-third {
    position: absolute;
    width: 90%;
    height: 1px;
    left: 20px;
    top: 470px;
    background-color: #ececec;
  }

  ////////////////멘토링 기간////////////////////
  .period {
    position: absolute;
    height: 16px;
    left: 20px;
    top: 490px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .period-ps {
    position: absolute;
    height: 24px;
    left: 20px;
    top: 500px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
  }
  .period-minus-btn {
    position: absolute;
    height: 24px;
    left: 280px;
    top: 490px;
  }
  .period-num-choose {
    position: absolute;
    height: 24px;
    left: 320px;
    top: 490px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
  .period-plus-btn {
    position: absolute;
    height: 24px;
    left: 340px;
    top: 490px;
  }
  .underbar-fourth {
    position: absolute;
    width: 90%;
    height: 1px;
    left: 20px;
    top: 530px;
    background-color: #ececec;
  }
  /////////////////오픈 채팅방 링크///////////////
  .openchat-option {
    display: flex;
    flex-direction: column;
    position: absolute;

    top: 550px;

    align-items: flex-start;
    margin-left: 20px;
    width: 90%;
    border-bottom: 1px solid #854df3;
    padding-bottom: 1%;
  }
  .openchat-link-title {
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
  .openchat-link-input-container {
    padding-top: 1%;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .openchat-link-input {
    width: 100%;
    border: none;
  }
  /////////////////등록 버튼//////////////
  .submit-btn {
    width: 90%;
    left: 20px;
    height: 50px;
    border: none;
    background-color: ${(props) => (props.boardtitle ? `#854DF3` : `#f3f3f3`)};
    color: ${(props) => (props.boardtitle ? `white` : `#a7a7a7`)};
    border-radius: 4px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  }
  //////////////////////마감 수정 삭제 버튼///////////////////
  .footer {
    position: absolute;
    top: 600px;
    width: 90%;
    left: 20px;
  }
  .multiple-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .deadline-btn {
    background: #854df3;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 50px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;

    letter-spacing: -0.003em;

    color: #ffffff;
  }
  .modify-btn {
    background: #b694f8;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 50px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;

    letter-spacing: -0.003em;

    color: #ffffff;
    margin-left: 1%;
    margin-right: 1%;
  }
  .delete-btn {
    background: #b4b4b4;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 50px;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;

    letter-spacing: -0.003em;

    color: #ffffff;
  }
`;
