import { useState } from 'react';

function DiaryView({ title, content, date, setSelectedDiaryIndex }) {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableContent, setEditableContent] = useState(content);
  const [isEditable, setIsEditable] = useState(false);
  
  const handleTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };
  
  const handleContentChange = (e) => {
    setEditableContent(e.target.value);
  };
  
  const handleSave = () => {
    title = editableTitle;
    content = editableContent;
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleBack = () => {
    setSelectedDiaryIndex(null);
  };
  
  return (
    <div>
      <input 
        type="text" 
        value={editableTitle} 
        onChange={handleTitleChange} 
        disabled={!isEditable}
      />
      <textarea
        value={editableContent}
        onChange={handleContentChange}
        disabled={!isEditable}
      />
      <div>{date}</div>
      {isEditable ? (
        <button onClick={handleSave}>저장</button>
      ) : (
        <button onClick={handleEdit}>수정하기</button>
      )}
      <button onClick={handleBack}>목록보기</button>
    </div>
  );
}

export default DiaryView;