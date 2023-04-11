import styled from 'styled-components';

const FormDiary = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    width: 90%;
    padding: 10px;
    margin: 10px 0px 0px 0px;
    border: none;
    border-bottom: 1px;
    background-color: rgba(1, 107, 8, 0.1);
  }
  textarea{
    width: 90%;
    height: 300px;
    padding: 10px;
    margin: 10px 0px 10px 0px;
    border: none;
    border-bottom: 1px;
    background-color: rgba(255, 201, 54, 0.1);
    resize: none;
  }

  .btn{
    width: 92%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .btn > div {
    display: inline-block;
    flex: 1;
    font-size: 0.9em;
  }
  button{
    flex: 1;
    padding: 0;
    margin: 0;
    text-align: right;
    margin-right: 10px;
    font-size: 1em;
    border: none;
    background-color: rgba(0, 0, 0, 0.0);
    font-weight: bold;
    color: #A96650;
    cursor: pointer;
  }
`

function DiaryForm({ inputTitle, setInputTitle, inputContent, setInputContent, emptyInput, handleSubmit }) {
    return (
      <FormDiary onSubmit={handleSubmit}>
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
        <div className='btn'>
          {emptyInput && <div>입력칸이 비었습니다</div>}
          <button type="submit">작성</button>
        </div>
      </FormDiary>
    );
  }
export default DiaryForm;
