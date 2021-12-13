import './style.scss';

const AddButton = ({addTodo}) => {

  return (
    <>
      <button className='add-button' onClick={addTodo}>Add</button>
    </>
  );
};

export default AddButton;