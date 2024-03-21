import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [editIndex, setEditIndex] = useState(null);
  const [disableAddTodo, setDisableAddTodo] = useState(false); // State to disable add todo button

  const handleAddTodo = (todo) => {
    if (todos.length < 9) {
      const newTodo = { text: todo, isDone: false };
      setTodos([...todos, newTodo]);
    } else {
      setDisableAddTodo(true); // Disable add todo button when max limit is reached
    }
  };

  const handleEditTodo = (index, newValue) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], text: newValue };
    setTodos(updatedTodos);
    setEditIndex(null);
    setDisableAddTodo(false); // Enable add todo button when editing is done
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setDisableAddTodo(false); // Enable add todo button when todo is deleted
  };

  const handleToggleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      isDone: !updatedTodos[index].isDone,
    };
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 bg-gray-100 rounded shadow-lg">
        <h1 className="text-2xl mb-4 flex justify-center ">Todo App</h1>
        {editIndex === null && !disableAddTodo && (
          <AddTodo onAdd={handleAddTodo} />
        )}
        {editIndex === null && disableAddTodo && (
          <p className="text-red-500 text-center mb-2">
            Maximum limit of 9 todo items reached.
          </p>
        )}
        {editIndex !== null && (
          <EditTodo
            todo={todos[editIndex].text}
            onEdit={(value) => handleEditTodo(editIndex, value)}
          />
        )}
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onEdit={(index) => setEditIndex(index)}
          onToggleDone={handleToggleDone}
        />
      </div>
    </div>
  );
};

export default App;
