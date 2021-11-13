import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { MainContainer } from '../Css/MainStyled';

const Main=()=>{
    const history=useHistory();
    const [role,setRole]=useState('mento')
    return(
        <MainContainer Role={role}>
        <div className="header">
        {role==='mento'?
                <div className="welcome-label">
                    <label>안녕하세요!</label>
                    <label>알려줄 준비 되셨나요?</label>
                </div>
        :            
            <div className="welcome-label">
                <label>안녕하세요!</label>
                <label>배울준비 되셨나요?</label>
            </div>}

            <div className="userinfo">
                <label className="mento-btn" onClick={()=>setRole("mento")}>멘토</label><label className="menti-btn" onClick={()=>setRole("menti")}>멘티</label>
                <label className="id">id님</label>
                <label className="college">...대학교</label>
                <label className="major">산업디자인학과</label>
                <label className="point-label"><img src="./images/point.png" alt="point"/>&nbsp;9,250</label>
                <label className="temp-title">
                    신뢰온도
                </label>
                <label className="temp-smile">
                    36℃&nbsp;
                    <img src="/images/temp-smile.png" alt="temp-smile"/>
                </label>
                <div className="progress-bar">
                <progress  value="36.5" max="100"></progress>
                
                </div>
            </div>

        </div>
        <div className="college-mentoring">
                <div className="college-mentoring-title-container">
                <label className="college-mentoring-title-purple">"...대학교"</label>
                <label className="college-mentoring-title-black">에서 진행중인 멘토링</label>
                </div>
            </div>
            <div className="test">

            </div>
            <div className="footer-container">
            <div className="write" disabled='disabled'>
                    {role==='mento'?
                    <label onClick={()=>{history.push('/mentoboard')}}>                    
                        <img src="/images/write.png" alt="write-icon"/>
                    </label>
                    :

                    <img src="/images/unwrite.png" alt="write-icon"/>   
                                    }

            </div>
            <footer className="footer">

                <div className="list">
                    <img src="/images/list-click.png" alt="list-click"/>
                </div>
                <div className="point-store">
                     <img src="/images/point-store.png" alt="point-store"/>
                </div>
            </footer>
            </div>
        </MainContainer>
    )
}

export default Main