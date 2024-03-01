import "./Task.css";

import { fetchTaskDelete, fetchTaskUpdate } from "../../../fetch";
import { getCookie } from "../../../getCookie";

import { useDispatch, useSelector } from 'react-redux'
import { setEditingStatusAction, addTitleAction } from "../../../redux/activeItemReducer";

export default function Task({ task, onClickCallBack }) {
    const dispatch = useDispatch()

    function handleClickChange(item) {
        dispatch(addTitleAction(item.title))
        dispatch(setEditingStatusAction(true))
        console.log('handleClickChange()', item)
    }

    function handleClickDelete(id) {
        fetchTaskDelete(id, getCookie).then(() => onClickCallBack("delete"));
    }
    function handleCheckbox(event, item){
        const task = {
            ...item,
            completed: event.target.checked,
        };
        fetchTaskUpdate(task, getCookie).then(() => onClickCallBack("update"))
        console.log(task)
    }

    return (
        <div className={task.completed ? 'task completed' : 'task'}>
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