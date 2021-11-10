import styled from 'styled-components';

export const SignupContainer=styled.div`
    .top{
        background: #FFFFFF;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
        padding-top:10px;
        padding-bottom:10px;
    }
    .back-btn{
        background-color:transparent;
        border:none;
        position: absolute;
        left: 3%;
        
    }
    .main-label{
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;
    }
    .id-lable{
        position: absolute;
        left: 20px;
        top: 53px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
    }
    .id-input{
        position: absolute;
        width: 255px;
        height: 47px;
        left: 20px;
        top: 75px;

        padding-left:2%;

        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .double-check-btn{
        position: absolute;
        width: 105px;
        height: 47px;
        left: 285px;
        top: 75px;

        background: #F5F5F5;        
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 2px;
        
    }
    .id-double-check-error{
        position: absolute;
        height: 16px;
        left: 20px;
        top: 125px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        
        color: #FF1200;   
        
        display:none;
    }
    .pw-label{
        position: absolute;
        height: 16px;
        left: 20px;
        top: 140px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
    }
    .pw-input{
        position: absolute;
        width: 370px;
        height: 47px;
        left: 20px;
        top: 158px;
        padding-left:2%;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .pw-explain{
        position: absolute;
        height: 14px;
        left: 20px;
        top: 210px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;

        color: #717171;
    }
    .pw-reinput{
        position: absolute;
        width: 370px;
        height: 47px;
        left: 20px;
        top: 230px;
        padding-left:2%;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .pw-incorrect{
        position: absolute;
        height: 16px;
        left: 20px;
        top: 280px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        
        color: #FF1200;
    
        display:none;
    }
    .college-name-label{
        position: absolute;
        height: 16px;
        left: 20px;
        top: 295px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
    }
    .college-name-input{
        position: absolute;
        width: 370px;
        height: 47px;
        left: 20px;
        top: 310px;
        padding-left:2%;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .college-num-label{
        position: absolute;
        height: 16px;
        left: 20px;
        top: 365px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;       
    }
    .college-num-input{
        position: absolute;
        width: 370px;
        height: 47px;
        left: 20px;
        top: 385px;
        padding-left:2%;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 4px; 
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .major-label{
        position: absolute;
        height: 16px;
        left: 20px;
        top: 435px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;        
    }
    .major-input{
        position: absolute;
        width: 370px;
        height: 47px;
        left: 20px;
        top: 455px;
        padding-left:2%;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 4px; 
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .profile-img-label{
        position: absolute;
        height: 16px;
        left: 20px;
        top: 510px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
    }
    .profile-img-input{
        position: absolute;
        width: 255px;
        height: 47px;
        left: 20px;
        top: 530px;
        padding-left:2%;
        background: #FFFFFF;
        border: 1px solid #DADADA;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
    }
    .profile-img-btn{
        position: absolute;
        width: 105px;
        height: 47px;
        left: 285px;
        top: 530px;
        
        /* 배경 */
        
        background: #F5F5F5;
        /* gray4 */
        
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 2px;
    }
    .signup-btn{
        position: absolute;
        width: 370px;
        height: 54px;
        left: 20px;
        top: 585px;
        
        /* black08 */
        
        background: #F3F3F3;
        border-radius: 4px;
    }
`;