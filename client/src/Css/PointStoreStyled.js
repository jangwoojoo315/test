import styled from "styled-components";

export const PointStoreContainer = styled.div`
  .container {
    height: 100vh;
  }
  .header {
    padding-top: 3%;
    padding-bottom: 3%;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    font-family: NanumSquare;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  }
  .userinfo-container {
    display: flex;
    flex-direction: row;
    border-bottom: 5px solid #e8e8e8;
    padding-left: 20px;
    padding-top: 3%;
    padding-bottom: 3%;
  }
  .userinfo {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3%;
  }
  .id {
    font-weight: bold;
  }
  .college {
    color: #999999;
    font-size: 13px;
  }
  .major {
    color: #999999;
    font-size: 13px;
  }
  .profile {
    width: 20%;
    background-color: red;
  }
  .point {
    width: 81px;
    height: 36px;
    border: 1px solid #efeeee;
    box-sizing: border-box;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gs25-title-container {
    display: flex;
    justify-content: flex-start;

    align-items: center;
    margin-top: 5%;
    margin-bottom: 3%;
  }
  .gs25-title-img {
    height: 12px;
    margin-right: 1%;
  }
  .gs25-title {
    font-weight: bold;
  }
  .gs25-info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .gs25-container {
    margin-left: 3%;
    margin-right: 3%;
  }
  .gs25 {
    display: flex;
    flex-direction: row;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 12px;
    padding-left: 3%;
    justify-content: space-between;
    margin-bottom: 1%;
  }
  .gs25-img {
    width: 45px;
    height: 15px;
  }
  .gs25-info {
    color: #717171;
  }
  //cultureland///
  .cultureland-title-container {
    display: flex;
    justify-content: flex-start;

    align-items: center;
    margin-top: 5%;
    margin-bottom: 3%;
  }
  .cultureland-title-img {
    height: 25px;
    margin-right: 2%;
  }
  .cultureland-title {
    font-weight: bold;
  }
  .cultureland-info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .cultureland-container {
    margin-left: 3%;
    margin-right: 3%;
  }
  .cultureland {
    display: flex;
    flex-direction: row;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 12px;
    padding-left: 3%;
    justify-content: space-between;
    margin-bottom: 1%;
  }
  .cultureland-img {
    width: 120px;
    height: 10px;
  }
  .cultureland-info {
    color: #717171;
  }
  .blank {
    height: 100px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    margin-top: auto;

    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
    border-radius: 30px 30px 0px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    padding-top: 10px;
  }
`;
