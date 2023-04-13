import { useState } from 'react';
import styled from 'styled-components';

const ViewDiary = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 90%;
    padding: 10px;
    margin: 10px 0px 0px 0px;
    border: none;
    border-bottom: 1px;
    background-color: rgba(254, 194, 194, 0.15);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .title span:first-child {
    font-weight: bold;
  }
  input {
    width: 80%;
    height: 15px;
    border: none;
    background: transparent;
    outline: none;
  }
  .content {
    width: 90%;
    height: 300px;
    padding: 10px;
    margin: 10px 0px 10px 0px;
    border: none;
    border-bottom: 1px;
    background-color: rgba(254, 194, 194, 0.15);
    resize: none;
    white-space: pre-wrap;
  }
  textarea {
    width: 100%;
    height: 300px;
    border: none;
    background: transparent;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }

  .btn {
    width: 92%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  button {
    padding: 0;
    margin: 0;
    text-align: right;
    font-size: 1em;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-weight: bold;
    color: #a96650;
    cursor: pointer;
  }
  .green {
    color: rgba(43, 186, 109, 1);
  }
`;

function DiaryView({
  title,
  content,
  date,
  setSelectedDiaryIndex,
  diaries,
  setDiaries,
  selectedDiaryIndex,
}) {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableContent, setEditableContent] = useState(content);
  const [editable, setEditable] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditableContent(e.target.value);
  };

  const handleSave = () => {
    if (!editableTitle || !editableContent) {
      setErrorMessage('제목과 내용을 입력해주세요.');
      return;
    }
    const newDiaries = [...diaries];
    newDiaries[selectedDiaryIndex] = {
      title: editableTitle,
      content: editableContent,
      date: date,
    };
    setDiaries(newDiaries);
    setEditable(false);
    setErrorMessage(''); // 에러 메시지 초기화
  };

  const handleBack = () => {
    setSelectedDiaryIndex(null);
  };

  return (
    <ViewDiary>
      <div className="title">
        {editable ? (
          <input
            type="text"
            value={editableTitle}
            onChange={handleTitleChange}
          />
        ) : (
          <span>{editableTitle}</span>
        )}
        <span>{date}</span>
      </div>
      <div className="content">
        {editable ? (
          <textarea value={editableContent} onChange={handleContentChange} />
        ) : (
          <div>{editableContent}</div>
        )}
      </div>
      <div className="btn">
        {editable ? (
          <button className="green" onClick={handleSave}>
            수정완료
          </button>
        ) : (
          <button onClick={() => setEditable(true)}>수정</button>
        )}
        <div className="error">{errorMessage}</div>
        <button onClick={handleBack}>목록보기</button>
      </div>
    </ViewDiary>
  );
}
export default DiaryView;
