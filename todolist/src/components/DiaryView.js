import { useState } from 'react';

function DiaryView({ title, content, date, setSelectedDiaryIndex, diaries, setDiaries, selectedDiaryIndex }) {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableContent, setEditableContent] = useState(content);
  const [editable, setEditable] = useState(false);

  const handleTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };
  
  const handleContentChange = (e) => {
    setEditableContent(e.target.value);
  };
  
  const handleSave = () => {
    const newDiaries = [...diaries];
    newDiaries[selectedDiaryIndex] = { title: editableTitle, content: editableContent, date: date };
    setDiaries(newDiaries);
    setEditable(false);
  };

  const handleBack = () => {
    setSelectedDiaryIndex(null);
  };

  const titleElement = editable ? (
    <input type="text" value={editableTitle} onChange={handleTitleChange} />
  ) : (
    <span>{editableTitle}</span>
  );

  const contentElement = editable ? (
    <textarea value={editableContent} onChange={handleContentChange} />
  ) : (
    <div>{editableContent}</div>
  );

  return (
    <div>
      {titleElement}
      {contentElement}
      <div>{date}</div>
      {editable ? (
        <button onClick={handleSave}>수정완료</button>
      ) : (
        <button onClick={() => setEditable(true)}>수정</button>
      )}
      <button onClick={handleBack}>목록보기</button>
    </div>
  );
}

export default DiaryView;