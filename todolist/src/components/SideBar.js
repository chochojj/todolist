import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const side = styled.div`
    
`

function SideBar() {
  return (
    <side>
        <nav>
            <Link to="/"><span>할 일 보기</span></Link>
            <Link to="/diary"><span>내 일기장</span></Link>
            <Link to="/calendar"><span>달력 보기</span></Link>
            <Link to="/madeby"><span>만든 사람</span></Link>
        </nav>
    </side>
  );
}

export default SideBar;
