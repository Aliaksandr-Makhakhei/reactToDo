import React, { useState, useEffect } from "react";
import todoListService from "../../services/todoList";
import UncompletedTodo from "../../components/UncompletedTodo";
import CompletedTodo from "../../components/CompletedTodo";
import InputField from "../../components/Input";
import AddButton from "../../components/AddButton";
import "./TodoList.scss";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    try {
      const data = await todoListService.load();
      setTodos(data);
    } catch (error) {
      alert("Too many click... Update page");
    }
  }

  const onAddTodo = async () => {
    if (input) {
      await todoListService.add({ description: input, completed: false });
      const data = await todoListService.load();
      setTodos(data);
      setInput("");
    } else {
      setError("Fill in the field");
    }
  };

  const onDelete = async (id) => {
    await todoListService.delete(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onClickCheckbox = async (checkbox) => {
    await todoListService.edit(checkbox);
    const data = await todoListService.load();
    setTodos(data);
  };

  const unCompletedTodoList = todos
    .filter((item) => item.completed === false)
    .map((item) => (
      <UncompletedTodo
        key={item.id}
        onCheck={(e) => onClickCheckbox({id: item.id, description: item.description, completed: e.target.checked})}
        description={item.description}
        onUpdate={() => todoListService.edit({ id: item.id, description: item.description })}
        completed={item.completed}
        onDelete={() => onDelete(item.id)}
      />
    ));

  const completedTodoList = todos
    .filter((item) => item.completed === true)
    .map((item) => (
      <CompletedTodo
        key={item.id}
        onCheck={(e) => onClickCheckbox({id: item.id, description: item.description, completed: e.target.checked})}
        description={item.description}
        completed={item.completed}
        onDelete={() => onDelete(item.id)}
      />
    ));

  return (
    <div className="wrapper">
      <div className="left_column">
        <div className="left_column-input">
          <InputField className={error ? "uncorrectInput" : "correctInput"} placeholder={error} value={input} onChange={(e) => setInput(e.target.value)}/>
          <AddButton addTodo={onAddTodo} />
        </div>
        <div className="total__counter">Total: {todos.length}</div>
        <div className="uncompleted__counter">To do: {unCompletedTodoList.length}</div>
        <div className="uncompleted__todos">{unCompletedTodoList}</div>
      </div>
      <div className="right__column">
        <div className="completed__counter">Completed: {completedTodoList.length}</div>
        {completedTodoList}
      </div>
    </div>
  );
};

export default TodoList;