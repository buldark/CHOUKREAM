import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';


const social = () => {
    
    return (
        <S.SoTopDiv>
            <S.SoHeader>
                <a href='#!' >인기</a> &nbsp;                
                <Link to='/lookbook/trending'>최신</Link> &nbsp;               
                <Link to='/lookbook/following'>팔로잉</Link>
            </S.SoHeader>

            <div>            
                <button><Link to='/lookbook/detail'>상세보기</Link></button>&nbsp;
                <button><Link to='/lookbook/mystyle'>MY스타일</Link></button>                
            </div>
        </S.SoTopDiv>
    );
};

export default social;
