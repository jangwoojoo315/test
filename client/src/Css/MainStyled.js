import styled from "styled-components";

export const MainContainer = styled.div`
.container{
    height:100vh;
}
    .header{
        background-image:url(${(props) =>
          props.Role === "mento"
            ? `/images/mento-header.png`
            : `/images/menti-header.png`});
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

        border-bottom: ${(props) =>
          props.Role === "mento" ? `#854DF3 1px solid;` : `gray 1px solid;`}
        padding-bottom:5px;
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;

        color:${(props) => (props.Role === "mento" ? `#854DF3;` : `gray;`)};
    }
    .menti-btn{
        position: absolute;
        width: 47%;
        height: 18px;
        left:185px;
        top: 10px;
        border-bottom:${(props) =>
          props.Role === "menti" ? `#854DF3 1px solid;` : `gray 1px solid;`}
        padding-bottom:5px;
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 18px;

        color:${(props) => (props.Role === "menti" ? `#854DF3;` : `gray;`)};
    }
    .id{
        position: absolute;
        width: 75px;
        height: 18px;
        left: 102px;
        top: 57px;     

        font-weight:bold;
    }
    .college{
        position: absolute;
        height: 16px;
        left: 122px;
        top: 83px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        
        display: flex;
        align-items: flex-end;
    
        color: #999999;        
    }
    .major{
        position: absolute;
        height: 16px;
        left: 122px;
        top: 100px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        
        display: flex;
        align-items: flex-end;
        
        color: #999999;        
    }
    .point-label{
        position: absolute;
        width: 81px;
        height: 36px;
        left: 247px;
        top: 45px;        
        border: 1px solid #EFEEEE;
        box-sizing: border-box;
        border-radius: 30px;
        padding-top:9px;
    }
    .temp-title{
        position: absolute;
        height: 16px;
        left: 12px;
        top: 150px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        
        display: flex;
        align-items: flex-end;        
    }
    .temp-smile{
        position: absolute;
        width: 29px;
        height: 16px;
        left: 300px;
        top: 150px;
        
        font-family: NanumSquare;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height */
        
        display: flex;
        align-items: flex-end;       
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

.college-mentoring-title-purple{
    position: absolute;
    
    height: 20px;
    left: 20px;
    top: 400px;
    
    font-family: NanumSquare;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
    
    color: #854DF3;    
}
.college-mentoring-title-black{
    position: absolute;
   
    left: 180px;
    top: 400px;
    
    font-family: NanumSquare;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
    
    color: black;    
}
.board-list{
     position:relative;
     top:28%;
     width:100%;
}
.board-detail{
    display:flex;
    flex-direction:row;
    padding-bottom:5%;
    width:90%;
    margin-left:5%;
    border-bottom:1px solid #EBEBEB;
}
.board-detail-profile{
    width:30%;
    background-color:gray;
    margin-left:10%;
}
.board-detail-content{
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    margin-left:5%;

}
.board-title{
    font-size:16px;
    font-weight:bold;
}
.board-id{
    font-size:15px;
    color:#797979;
}
.board-college{
    font-size:13px;
    color:#C4C4C4;
}
.board-major{
    font-size:13px;
    color:#C4C4C4;
}
.write{
    position:fixed;
    bottom:80px;
    left:80%;
}
.footer{
    position:fixed;
    bottom:0;
    width:100%;
    height:60px; 
   margin-top:auto;
    
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
    border-radius: 30px 30px 0px 0px;  

    display:flex;
    flex-direction:row;
    justify-content: space-evenly;

    padding-top:10px;
}

 `;
