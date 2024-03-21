import PropTypes from "prop-types";

const TodoItem = ({ todo, onDelete, onEdit, onToggleDone, isDone }) => {
  return (
    <li className="bg-gray-100 rounded p-2 mb-2 flex items-center space-x-2">
      <span
        className={`border border-gray-300 rounded px-2 py-1 flex-grow ${
          isDone ? "line-through" : ""
        }`}
        style={{
          Height: "2.15em",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          whiteSpace: "nowrap",
        }}
      >
        {todo}
      </span>
      {!isDone && (
        <>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded"
            onClick={onEdit}
          >
            Edit
          </button>
        </>
      )}
      <button
        className="px-2 py-1 bg-red-500 text-white rounded"
        onClick={onDelete}
      >
        Delete
      </button>
      {!isDone && (
        <>
          <button
            className="px-2 py-1 bg-green-500 text-white rounded"
            onClick={onToggleDone}
          >
            Done
          </button>
        </>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default TodoItem;
