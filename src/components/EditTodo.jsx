// EditTodo.jsx
import { useState } from "react";
import PropTypes from "prop-types";
const EditTodo = ({ todo, onEdit }) => {
  const [inputValue, setInputValue] = useState(todo);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditTodo = () => {
    if (inputValue.trim() !== "") {
      onEdit(inputValue);
    }
  };

  return (
    <div className="flex space-x-2 py-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-2 py-1 flex-grow"
      />
      <button
        onClick={handleEditTodo}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};
EditTodo.propTypes = {
  todo: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditTodo;
