import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar';
import TodoList from './TodoList';
import './style.scss';

const TodoListPage = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Sidebar />
        <div className='main__todos'>
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default TodoListPage;