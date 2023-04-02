import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import AddForm from '../components/AddForm';
import styled from 'styled-components';

const TodoContain = styled.div`
    width: 400px;
    height: 500px;
    background-color: rgba(255,255,255,0.7);
    display: flex;
    flex-direction: column;

    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0,0,0, 0.1);
`

function TodoPage() {
  return (
    <TodoContain>
        <TodoList>
            <AddForm/>
            <Todo/>
        </TodoList>
    </TodoContain>
  );
}

export default TodoPage;
