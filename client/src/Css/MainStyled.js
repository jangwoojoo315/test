import styled from 'styled-components';

export const MainContainer=styled.div`
    .header{
        background-image:url(/images/header.png);
        background-repeat:no-repeat;
        width:420px;
        height:240px;
        background-size:420px 240px;
        
    }
    .welcome-label{
        position: absolute;
        display:flex;
        flex-direction:column;
        
        left: 28px;
        top: 50px;
       
        font-family: NanumSquare;
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
       align-items:flex-start;
        letter-spacing: -0.3px;
        color:white
    }
    .userinfo{
        position: absolute;
        width: 370px;
        height: 202px;
        left: 20px;
        top: 140px;
        background-color:white;
        border-radius: 14px;
        box-shadow: 0px 0px 15px rgba(205, 180, 255, 0.5);
        border-radius: 16px;
    }
    .mento-btn{
        position: absolute;
        width: 47%;
        height: 18px;
        left:10px;
        top: 10px;
        border-bottom:#BDC4CB 1px solid;
        padding-bottom:5px;
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;

        color:#BDC4CB;
    }
    .menti-btn{
        position: absolute;
        width: 47%;
        height: 18px;
        left:185px;
        top: 10px;
        border-bottom:#BDC4CB 1px solid;
        padding-bottom:5px;
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;

        color:#BDC4CB;
    }
    .id{
        position: absolute;
        width: 75px;
        height: 18px;
        left: 102px;
        top: 57px;     

        font-weight:bold;
    }
    progress {
        -webkit-appearance: none;
        position:absolute;
        top:170px;
        left:12px;
        width:340px;
        ::-webkit-progress-bar {
            background-color: rgba(133, 77, 243, 0.1);
           border-radius:100px;
           
          }
          
          ::-webkit-progress-value {
            background-color: #854DF3;
            border-radius:100px;
            
          }
         
      }


 `;
 
 