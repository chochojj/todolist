import React, { useState } from 'react';
import styled from 'styled-components';
import DiaryForm from '../components/DiaryForm';
import DiaryList from '../components/DiaryList';
import DiaryView from '../components/DiaryView';

const TodayLog = styled.div`
  width: 800px;
  height: 500px;
  background-color: rgba(255,255,255,0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(0,0,0, 0.1);

  .header{
    /* position: relative; */
    width: 100%;
    height: 40px;
    margin: 5px 0px;
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: space-between;
  }

  .date{
    font-size: 1.2em;
    font-weight:600;
  }
  .date > span:first-child{
    margin-left: 30px;
  }
  .date > span::selection{
		color: orange;
  }
  .day{
    margin-left: 5px;
  }
  .day::selection{
    color: orange;
  }
`;

const AddDiaryButton = styled.button`
  width: 130px;
  height: 32px;
  text-align: center;
  font-size: 1em;
  border: none;
  background-color: rgba(0, 0, 0, 0.0);
  font-weight: bold;
  margin-right: 20px;
  color: #A96650;
  cursor: pointer;
`;

function Diary() {
  const [diaries, setDiaries] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);
  const [selectedDiaryIndex, setSelectedDiaryIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const newDiaries = [...diaries];
    if (selectedDiaryIndex === index) {
      setSelectedDiaryIndex(null);
    } else if (selectedDiaryIndex > index) {
      setSelectedDiaryIndex(selectedDiaryIndex - 1);
    }
    newDiaries.splice(index, 1);
    setDiaries(newDiaries);
  };

  const handleSelect = (index) => {
    setSelectedDiaryIndex(index);
  };

  const handleAddDiaryClick = () => {
    setShowForm(true);
  };

  const today = new Date();
  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

  return (
    <TodayLog>
      <div className='header'>
        <div className='date'>  
          <span>{dateString}</span>
          <span className="day">{dayName}</span>
        </div>
        {!showForm ? (<AddDiaryButton onClick={handleAddDiaryClick}>오늘의 일기 작성</AddDiaryButton>):(null)}
      </div>
      {showForm ? (
        <DiaryForm
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          inputContent={inputContent}
          setInputContent={setInputContent}
          emptyInput={emptyInput}
          handleSubmit={handleSubmit}
        />
      ) : (
        null
      )}
      {selectedDiaryIndex === null && !showForm && (
        <DiaryList
          diaries={diaries}
          handleDelete={handleDelete}
          handleSelect={handleSelect}
          selectedDiaryIndex={selectedDiaryIndex}
        />
      )}
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
