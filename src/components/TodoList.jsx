import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, onDelete, onEdit, onToggleDone }) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo.text}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
          onToggleDone={() => onToggleDone(index)}
          isDone={todo.isDone} // Pass the isDone status of each todo item
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TodoList;
