import styled from 'styled-components';

const FormUl = styled.ul`
  width: 90%;
  padding: 0;
  height: 380px;
  overflow: auto;

  li{
    height: 20px;
    background-color: rgba(250, 233, 211, 0.3);
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 7px;
    padding: 10px;
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    position: absolute;
    width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(1, 107, 8, 0.1);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(1, 107, 8, 0.2);
}


`;

function DiaryList({ diaries, handleDelete, handleSelect, selectedDiaryIndex }) {
    return (
      <FormUl>
        {diaries.map((diary, index) => (
          <li key={index} className={selectedDiaryIndex === index ? 'selected' : ''}>
            <span onClick={() => handleSelect(index)}>{diary.title} {diary.date}</span>
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </FormUl>
    );
  }
  export default DiaryList;
