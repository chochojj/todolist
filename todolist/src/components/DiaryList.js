function DiaryList({ diaries, handleDelete, handleSelect, selectedDiaryIndex }) {
    return (
      <ul>
        {diaries.map((diary, index) => (
          <li key={index} onClick={() => handleSelect(index)} className={selectedDiaryIndex === index ? 'selected' : ''}>
            {diary.title} ({diary.date})
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    );
  }
  export default DiaryList;
