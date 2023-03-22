import React, { useState } from 'react';
import styled from 'styled-components';

const todaylog = styled.div`
    
`

function Diary() {
  const [diaries, setDiaries] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTitle || !inputContent) {
      setEmptyInput(true);
      return;
    }
    const currentDate = new Date().toLocaleDateString();
    setDiaries([...diaries, { title: inputTitle, content: inputContent, date: currentDate }]);
    setInputTitle('');
    setInputContent('');
    setEmptyInput(false);
  };

  const handleDelete = (index) => {
    const newDiaries = [...diaries];
    newDiaries.splice(index, 1);
    setDiaries(newDiaries);
  };

  return (
    <todaylog>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="제목" 
          value={inputTitle} 
          onChange={(e) => setInputTitle(e.target.value)} 
        />
        <textarea
          placeholder="내용"
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        {emptyInput && <div>입력칸이 비었습니다.</div>}
        <button type="submit">작성</button>
      </form>
      <ul>
        {diaries.map((diary, index) => (
          <li key={index}>
            {diary.title} ({diary.date})
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </todaylog>
  );
}

export default Diary;
