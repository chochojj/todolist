import React, { useState } from 'react';
import styled from 'styled-components';
import DiaryForm from '../components/DiaryForm';
import DiaryList from '../components/DiaryList';
import DiaryView from '../components/DiaryView';
const TodayLog = styled.div`
    
`

function Diary() {
   const [diaries, setDiaries] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [selectedDiaryIndex, setSelectedDiaryIndex] = useState(null);

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

  const handleSelect = (index) => {
    setSelectedDiaryIndex(index);
  };

  return (
    <TodayLog>
      <DiaryForm
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        inputContent={inputContent}
        setInputContent={setInputContent}
        emptyInput={emptyInput}
        handleSubmit={handleSubmit}
      />
      <DiaryList
        diaries={diaries}
        handleDelete={handleDelete}
        handleSelect={handleSelect}
        selectedDiaryIndex={selectedDiaryIndex}
      />
      {selectedDiaryIndex !== null && (
        <DiaryView
          title={diaries[selectedDiaryIndex].title}
          content={diaries[selectedDiaryIndex].content}
          date={diaries[selectedDiaryIndex].date}
          setSelectedDiaryIndex={setSelectedDiaryIndex}
          selectedDiaryIndex={selectedDiaryIndex}
          diaries={diaries}
          setDiaries={setDiaries} 
        />
      )}
    </TodayLog>
  );
}

export default Diary;
