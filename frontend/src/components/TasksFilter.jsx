import PropTypes from "prop-types";

function TasksFilter({ filter, setFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter === "All" ? "selected" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === "Active" ? "selected" : ""}
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === "Completed" ? "selected" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default TasksFilter;
