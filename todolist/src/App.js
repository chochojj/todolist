// import logo from './logo.svg';
import {React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TodoPage from './pages/TodoPage';
import Diary from './pages/Diary';
import Calendar from './pages/Calendar';
import Madeby from './pages/MadeBy';



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


  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header 
          openside={openside}
          setSide={setSide}
        />
        {/* <TodoPage/> */}
        <Routes>
          <Route path="/" element={<TodoPage/>} />
          <Route path="/diary" element={<Diary/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/madeby" element={<Madeby/>} />
        </Routes>
      </BrowserRouter>
      {openside === true ? <SideBar/> : null}
    </>
  );
}

export default App;
