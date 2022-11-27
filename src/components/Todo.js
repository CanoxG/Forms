import React, { useCallback, useEffect, useState } from "react";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Instead of Recreating the Function for every render we cashed
  const onNewTodoChange = useCallback((event) => {
    console.log(event.target.value);
    setNewTodo(event.target.value);
  }, []);

  const formSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!newTodo.trim()) return;
      setTodos([
        // Last one will be in the top
        {
          id: todos.length ? todos[0].id + 1 : 1,
          content: newTodo,
          done: false,
        },
        ...todos,
      ]);
      setNewTodo("");
    },
    [newTodo, todos]
  );

  // Page render Just When Todos Change
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // Closure
  const editTodo = useCallback(
    (todo, i) => (e) => {
      const copyTodo = [...todos];
      copyTodo.splice(i, 1, {
        ...todo,
        done: !todo.done,
      });
      setTodos(copyTodo);
    },
    [todos]
  );

  // Closure
  const removeTodo = useCallback(
    (todo) => (event) => {
      setTodos(todos.filter((filteredTodo) => filteredTodo !== todo));
    },
    [todos]
  );

  return (
    <form onSubmit={formSubmit}>
      <fieldset>
        <legend>React</legend>
        <label htmlFor="todo">To-Do:</label>
        <input
          id="todo"
          type="text"
          value={newTodo}
          onChange={onNewTodoChange}
        />
        <button>Add Todo</button>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.done}
                onChange={editTodo(todo, i)}
              />
              <span className={todo.done ? "done" : ""}>{todo.content}</span>
              <button onClick={removeTodo(todo)}>Remove</button>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>
  );
}

export default Todo;
