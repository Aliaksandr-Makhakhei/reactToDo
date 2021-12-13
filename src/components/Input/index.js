import './style.scss';

const InputField = ({className, placeholder, value, onChange}) => {
  return (
    <>
      <input className={className ? 'input__field' : 'input__field-empty'} placeholder={'+ Add a task, press Enter to save' || placeholder} name='text' value={value} onChange={onChange} />
    </>
  );
};

export default InputField;
