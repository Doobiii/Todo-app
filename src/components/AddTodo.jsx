// AddTodo.jsx
import { useState } from "react";
import PropTypes from "prop-types";
const AddTodo = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex space-x-2 mb-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="border border-gray-300 rounded px-2 py-1.5 flex-grow"
        placeholder="Enter todo..."
      />
      <button
        onClick={handleAddTodo}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Add Todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddTodo;
