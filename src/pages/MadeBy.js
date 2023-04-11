import React from 'react';
import styled from 'styled-components';

const Made = styled.section`
    width: 400px;
    height: 500px;
    background-color: rgba(255,255,255,0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0,0,0, 0.1);
    text-align: center;

    p{
        font-size: 16px;
        margin-bottom : 10px;
    }
    p:last-of-type{
        margin-top: 30px;   
    }
    a{
        font-size: 16px;
        margin-top: 30px;
    }
    .name{
        font-size: 20px;
        margin-bottom: 40px;
    }
`

function Madeby() {
  return (
    <Made>
      <div className='img_wrap'><img/></div>
      <div className='profile'>
        <p className='name'>조지현</p>
        <p>소개</p>
        <p>종이질감의 노트에 기록하는 느낌을 담아</p>
        <p>토끼와 당근 일러스트를 사용한</p>
        <p>일정 도우미 웹을 만들었습니다</p>
        <p>Github URL </p>
        <a target="_blank" rel="noreferrer" href='https://github.com/chochojj/todolist'>🥕 코드 구경하기 🐇</a>
      </div>
    </Made>
  );
}

export default Madeby;
