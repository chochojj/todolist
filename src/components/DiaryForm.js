import styled from 'styled-components';

const FormDiary = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  button{
    position:relative;
    width: 80px;
    top:0px;
    margin-right: 10px;
  }
`

function DiaryForm({ inputTitle, setInputTitle, inputContent, setInputContent, emptyInput, handleSubmit }) {
    return (
      <FormDiary onSubmit={handleSubmit}>
        <button type="submit">작성</button>
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
      </FormDiary>
    );
  }
export default DiaryForm;
