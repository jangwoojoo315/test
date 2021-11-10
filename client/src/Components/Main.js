import React from 'react';
import { getCookie } from '../Common/Cookie';
import { MainContainer } from '../Css/MainStyled';

const Main=()=>{
    console.log(getCookie('uri'))
    return(
        <MainContainer>
        <div className="header">
            <div className="welcome-label">
            <label>안녕하세요!</label>
            <label>배울준비 되셨나요?</label>
            </div>
            <div className="userinfo">
                <label className="mento-btn">멘토</label><label className="menti-btn">멘티</label>
                <label className="id">id님</label>
                <div className="progress-bar">
                <progress  value="36.5" max="100"></progress>
                
                </div>
            </div>
        </div>
        </MainContainer>
    )
}

export default Main