import "./Task.css";

import { fetchTaskDelete } from "../../../fetch";


import { useDispatch } from "react-redux";
import {
    setEditingStatusAction,
    addTitleAction,
    addIdAction,
} from "../../../redux/activeItemReducer";
import { removeTaskAction, setCompleted } from "../../../redux/taskReducer";

export default function Task({ task }) {
    const dispatch = useDispatch();

    function handleClickChange(item) {
        dispatch(addIdAction(item.id))
        dispatch(addTitleAction(item.title));
        dispatch(setEditingStatusAction(true));
        console.log("handleClickChange()", item);
    }

    function handleClickDelete(id) {
        dispatch(removeTaskAction(id));
        fetchTaskDelete(id);
        console.log("id delete", id);
    }
    function handleCheckbox(event, item) {
        console.log(event.target.checked, item.id);
        dispatch(setCompleted({ event: event.target.checked, id: item.id }));
    }

    return (
        <div className={task.completed ? "task completed" : "task"}>
            <div className="title">
                <input
                    className="checkbox-input"
                    type="checkbox"
                    id={task.id}
                    defaultChecked={task.completed}
                    onChange={(event) => handleCheckbox(event, task)}
                />
                <label htmlFor={task.id}>
                    <span className="checkbox"></span>
                    <span className="span-title">{task.title}</span>
                </label>
            </div>

            <div className="action">
                <button onClick={() => handleClickChange(task)}>
                    Изменить
                </button>
                <button onClick={() => handleClickDelete(task.id)}>
                    Удалить
                </button>
            </div>
        </div>
    );
}

// export default Task = memo(Task)
