import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { SigninContainer } from '../Css/SigninStyled'

const Signin=()=>{
    const history=useHistory()
    const [userInfo,setUserInfo]=useState({
        id:'',
        password:''
    })
    const onHandleChange=(e)=>{
       if(e.target.name==='id'){
           setUserInfo({
             id:e.target.value,
             password:userInfo.password
           })
       }else if(e.target.name==='pw'){
           setUserInfo({
               id:userInfo.id,
               password:e.target.value
           })
       }
    }
    
    return(
        <SigninContainer>
        <div className="main">
            <input type="text" name="id" className="signin-input" placeholder="아이디를 입력하세요" value={userInfo.id || ''} onChange={onHandleChange}></input><br/>
            <input type="password" name="pw" className="logout-input" placeholder="비밀번호를 입력하세요" value={userInfo.password || ''} onChange={onHandleChange}></input><br/>
            <button className="signin-btn" onClick={()=>history.push('./main')}>로그인</button><br/>
            <label className="signup-btn" onClick={()=>history.push('/signup')}>회원가입</label>
        </div>
        </SigninContainer>
    )
}

export default Signin