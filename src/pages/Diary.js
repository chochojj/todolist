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
`;

const AddDiaryButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 5px;
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

  return (
    <TodayLog>
      <DiaryList
        diaries={diaries}
        handleDelete={handleDelete}
        handleSelect={handleSelect}
        selectedDiaryIndex={selectedDiaryIndex}
      />
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
        <AddDiaryButton onClick={handleAddDiaryClick}>일기쓰기</AddDiaryButton>
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