import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SignupContainer } from "../Css/SignupStyled";
import { removeCookie, setCookie } from "../Common/Cookie";
const Signup=()=>{
    const history=useHistory();
    console.log("signup")
    const [uri,setUri]=useState()
    const test=(e)=>{
        let reader=new FileReader();
        reader.onloadend=()=>{
            setUri(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
        
    }

    
    return(
        <SignupContainer>
            <div className="top">
                <button className="back-btn" onClick={()=>history.goBack()}>〈 </button>
                <label className="main-label">회원가입</label>
            </div>
            <div className="main">
                <label className="id-lable">아이디</label><br/>
                <input className="id-input" type="text" placeholder="아이디를 입력해주세요"></input><button className="double-check-btn">중복확인</button><br/>
                <label className="id-double-check-error">아이디 중복체크를 실행해주세요.</label>

                <label className="pw-label">비밀번호</label><br/>
                <input className="pw-input" type="password" placeholder="비밀번호를 입력해주세요"></input><br/>
                <label className="pw-explain">영문,숫자 포함 10 ~ 16자</label><br/>
                <input className="pw-reinput" type="password" placeholder="비밀번호를 재입력해주세요"></input><br/>
                <label className="pw-incorrect">비밀번호가 일치하지 않습니다.</label>

                <label className="college-name-label">학교</label><br/>
                <input className="college-name-input" placeholder="재학중인 학교를 입력해주세요"></input>

                <label className="college-num-label">학번</label><br/>
                <input className="college-num-input" placeholder="학번을 입력해주세요"></input>

                <label className="major-label">전공</label><br/>
                <input className="major-input" placeholder="전공을 입력해주세요"></input>

                <label className="profile-img-label">프로필사진(선택사항)</label><br/>
                <input className="profile-img-input" placeholder="사진 파일을 첨부해주세요" type="file" onChange={test}></input>
                <img src={uri} alt=""/>
                <button className="profile-img-btn">첨부</button>
            </div>

            <div className="footer">
                <button className="signup-btn">회원가입</button>
            </div>
        </SignupContainer>
    )
}
export default Signup