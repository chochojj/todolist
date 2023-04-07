// import logo from './logo.svg';
import {React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import SideBar from './components/SideBar';
import TodoPage from './pages/TodoPage';
import Diary from './pages/Diary';
import Calendar from './pages/Calendar';
import Madeby from './pages/MadeBy';
import useFetch from './util/useFetch';



const GlobalStyle = createGlobalStyle`
  *{
    list-style: none;
    text-decoration: none;
    font-family: "NanumLt"
  }
  body {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding : 0;
    box-sizing: border-box;
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.pinimg.com/564x/01/04/fa/0104fa2f4166c80aceec00e243e15d25.jpg);
    /* 높이를 줘야 align-items: center; 가 먹음 */
  }
`;

function App() {
  const [openside, setSide] = useState(false);
  const [todos, isPending, error] = useFetch(`http://localhost:3001/todos`);

  return (
    <>
      <GlobalStyle />
      <Header 
          openside={openside}
          setSide={setSide}
      />
      <BrowserRouter>
        { error && <div>{ error }</div> }
        <Routes>
          <Route path="/" element={<TodoPage todos={todos} isPending={isPending}/>} />
          <Route path="/diary" element={<Diary/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/madeby" element={<Madeby/>} />
        </Routes>
        {/* 링크로 연결시키는 부분이 브라우저 라우터 - 라우츠 사이 있어야함 */}
        {openside === true ? <SideBar/> : null}
      </BrowserRouter>
    </>
  );
}

export default App;
