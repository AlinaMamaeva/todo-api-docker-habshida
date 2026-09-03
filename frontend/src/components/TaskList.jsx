import Task from "./Task";
import PropTypes from "prop-types";

function TaskList({
  tasks,
  toggleStatus,
  deleteTask,
  updateTask,
  toggleEdit,
  editingTaskId,
}) {
  return (
    <section className="main">
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            updateTask={updateTask}
            toggleEdit={toggleEdit}
            isEditing={editingTaskId === task._id}
          />
        ))}
      </ul>
    </section>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  editingTaskId: PropTypes.string,
};
TaskList.defaultProps = {
  tasks: [],
  editingTaskId: null,
};
export default TaskList;
