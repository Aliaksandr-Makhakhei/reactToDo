import './style.scss';

const UncompletedTodo = ({onCheck, description, onUpdate, completed, onDelete}) => {
  return (
    <div className='uncompleted-todos'>
      <div className='uncompleted-todos__content'>
        <input className='uncompleted-todos__content-checkbox' type='checkbox' defaultChecked = {completed} onClick={onCheck} />
        <div className='uncompleted-todos__content-text'>{description}</div>
      </div>
      <div className='uncompleted-todos__icons'>
      {!completed && <img src='/images/edit-todo.svg' alt='edit-todo' className='uncompleted-todos__icons-edit' onClick={onUpdate} />}
        <img src='/images/delete-todo.svg' alt='delete-todo' className='uncompleted-todos__icons-delete' onClick={onDelete} />
      </div>
    </div>
  );
};

export default UncompletedTodo;