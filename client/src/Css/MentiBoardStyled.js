import styled from "styled-components";

export const MentiBoardStyled = styled.div`
  .container {
    width: 100%;
    height: 100vh;
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
  /////////////////////////////게시판글작성/////////////////
  .board {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 22vh;

    width: 100%;
    border-bottom: 8px solid #f2f3f7;
  }
  .board-title {
    padding-bottom: 3%;
    border: none;
    width: 85%;

    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    border-bottom: 1px solid #f2f3f7;
  }
  .board-info {
    width: 83%;
    height: 230px;
    margin-left: 8%;
    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;

    border: none;
  }

  ////////////////인원 수////////////////////
  .people-num-option {
    position: relative;
    width: 90%;
    top: 24vh;
    display: flex;
    flex-direction: row;
    left: 20px;
    border-bottom: 1px solid #ececec;
    padding-bottom: 3%;
  }
  .people-num {
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    margin-left: 2%;
  }
  .people-num-choose {
    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    margin-left: 23%;
  }

  ////////////////멘토링 기간////////////////////
  .period-option {
    position: relative;
    width: 90%;
    top: 27vh;
    display: flex;
    flex-direction: row;
    left: 20px;
    padding-bottom: 3%;
  }
  .period {
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    margin-left: 4%;
  }
  .period-num-choose {
    font-family: NanumSquare;
    font-style: normal;
    font-weight: normal;
    margin-left: 15%;
  }

  //////////////////////링크복사-신청하기///////////////////
  .footer {
    position: relative;
    top: 30vh;
    width: 90%;
    left: 20px;
    display: flex;
    flex-direction: row;
  }
  .link-copy-btn {
    height: 50px;
    width: 50%;
    background-color: ${(props) => (props.regist ? `#854df3` : `#f3f3f3`)};
    color: ${(props) => (props.regist ? `white` : `#a7a7a7`)};
    border: none;
    border-radius: 4px;
    margin-right: 1%;
  }
  .regist-btn {
    height: 50px;
    width: 50%;
    margin-left: 1%;
    background-color: ${(props) => (props.regist ? `#f3f3f3` : `#854df3`)};
    color: ${(props) => (props.regist ? `#a7a7a7` : `white`)};
    border: none;
    border-radius: 4px;
  }
`;
