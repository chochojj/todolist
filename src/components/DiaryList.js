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
  .title{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  
  button {
    /* font-size: 1vh; */
    width: 20px;
    height: 20px;
    margin-left: 10px;
    padding: 0;
    font-weight: bold;
    justify-self: center;
    align-self: center;
    border: none;
    background-color: transparent;
  }
  button:hover{
    cursor: pointer;
    background-color:rgba(133, 86, 40,0.7);
    color: white;
  }

`;

function DiaryList({ diaries, handleDelete, handleSelect, selectedDiaryIndex }) {
    return (
      <FormUl>
        {diaries.map((diary, index) => (
          <li key={index} className={selectedDiaryIndex === index ? 'selected' : ''}>
            <div className='title' onClick={() => handleSelect(index)}><span>{diary.title}</span><span>{diary.date}</span> </div>
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </FormUl>
    );
  }
  export default DiaryList;
