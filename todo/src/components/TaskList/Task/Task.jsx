import "./Task.css";

export default function Task({ task, onClickCallBack }) {
    function handleClick(item, isChange) {
        const task = {
            ...item,
            editing: null,
        };

        if (isChange) {
            task.editing = true;
        } else {
            task.editing = false;
        }
        
        onClickCallBack(task);
    }

    return (
        <div className="task">
            <div className="title">
                <span className="span-title">{task.title}</span>
            </div>

            <div className="action">
                <button onClick={() => handleClick(task, true)}>
                    Изменить
                </button>
                <button onClick={() => handleClick(task, false)}>
                    Удалить
                </button>
            </div>
        </div>
    );
}
