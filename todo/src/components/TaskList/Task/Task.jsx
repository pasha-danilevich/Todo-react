import "./Task.css";

import { svgChange } from "../../../assets/todo_icons_change.jsx";
import { svgDelete } from "../../../assets/todo_icons_delete.jsx";
import { useDispatch } from "react-redux";
import {
    setIdToActiveItem,
    setTitleToActiveItem,
    toggleEditingToActiveItem,
} from "../../../redux/activeItemSlice";
import {
    toggleComplete,
    fetchDeleteTask,
    fetchUpdateTask,
} from "../../../redux/taskSlice";

export default function Task({ task }) {
    const dispatch = useDispatch();

    function handleClickChange(item) {
        dispatch(setIdToActiveItem({ id: item.id }));
        dispatch(setTitleToActiveItem({ title: item.title }));
        dispatch(toggleEditingToActiveItem({ editing: true }));
    }

    function handleClickDelete(id) {
        dispatch(fetchDeleteTask(id));
    }
    function handleCheckbox(event, item) {
        dispatch(
            fetchUpdateTask({
                id: item.id,
                title: item.title,
                completed: event.target.checked,
            })
        );
    }

    return (
        <label
            htmlFor={task.id}
            className={task.completed ? "task completed" : "task"}
        >
            <div className="title">
                <input
                    className="checkbox-input"
                    type="checkbox"
                    id={task.id}
                    defaultChecked={task.completed}
                    onChange={(event) => handleCheckbox(event, task)}
                />
                <label htmlFor={task.id}>
                    <span className="checkbox noselect"></span>
                    <span className="span-title noselect">{task.title}</span>
                </label>
            </div>

            <div className="action">
                <button
                    className="noselect"
                    onClick={() => handleClickChange(task)}
                >
                    {svgChange}
                </button>
                <button
                    className="noselect"
                    onClick={() => handleClickDelete(task.id)}
                >
                    {svgDelete}
                </button>
            </div>
        </label>
    );
}

// export default Task = memo(Task)
