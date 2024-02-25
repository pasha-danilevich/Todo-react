import "./Task.css";

import { fetchTaskDelete } from "../../../fetch";
import { getCookie } from "../../../getCookie";

export default function Task({ task, onClickCallBack }) {
    function handleClickChange(item) {
        const task = {
            ...item,
            editing: true,
        };
        onClickCallBack(task);
    }

    function handleClickDelete(id) {
        fetchTaskDelete(id, getCookie).then(() => onClickCallBack("delete"));
    }

    return (
        <div className="task">
            <div className="title">
                <input
                    className="checkbox-input"
                    type="checkbox"
                    id={task.id}
                    defaultChecked={task.completed}
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
