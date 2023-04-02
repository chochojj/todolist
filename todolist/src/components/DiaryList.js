import styled from 'styled-components';

function DiaryList({ diaries, handleDelete, handleSelect, selectedDiaryIndex }) {
    return (
      <ul>
        {diaries.map((diary, index) => (
          <li key={index} className={selectedDiaryIndex === index ? 'selected' : ''}>
            <span onClick={() => handleSelect(index)}>{diary.title} {diary.date}</span>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    );
  }
  export default DiaryList;
