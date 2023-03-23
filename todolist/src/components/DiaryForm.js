function DiaryForm({ inputTitle, setInputTitle, inputContent, setInputContent, emptyInput, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="제목" 
          value={inputTitle} 
          onChange={(e) => setInputTitle(e.target.value)} 
        />
        <textarea
          placeholder="내용"
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
        {emptyInput && <div>입력칸이 비었습니다.</div>}
        <button type="submit">작성</button>
      </form>
    );
  }
export default DiaryForm;
