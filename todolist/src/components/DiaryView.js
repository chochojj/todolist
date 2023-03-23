import { useState } from 'react';

function DiaryView({ title, content, date, setSelectedDiaryIndex }) {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableContent, setEditableContent] = useState(content);
  
  const handleTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };
  
  const handleContentChange = (e) => {
    setEditableContent(e.target.value);
  };
  
  const handleSave = () => {
    title = editableTitle;
    content = editableContent;
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
      />
      <textarea
        value={editableContent}
        onChange={handleContentChange}
      />
      <div>{date}</div>
      <button onClick={handleSave}>저장</button>
      <button onClick={handleBack}>목록보기</button>
    </div>
  );
}
export default DiaryView;