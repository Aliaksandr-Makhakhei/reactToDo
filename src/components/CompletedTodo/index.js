import './style.scss';

const CompletedTodo = ({onCheck, description, completed, onDelete}) => {
  return (
    <div className='completed-todos'>
      <div className='completed-todos__content'>
        <input className='completed-todos__content-checkbox' type='checkbox' defaultChecked = {completed} onClick={onCheck} />
        <div className='completed-todos__content-text'>{description}</div>
      </div>
      <div className='completed-todos__icons'>
        <img src='/images/delete-todo.svg' alt='delete-todo' className='completed-todos__icons-delete' onClick={onDelete} />
      </div>
    </div>
  );
};

export default CompletedTodo;