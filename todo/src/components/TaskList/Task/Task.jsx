

import "./Task.css";

export default function Task(task) {



    function chengeHendler(obj){
        // добавить поле editing

    }

    return (
        <div className="task">
            <div className="title">
                <span className="span-title">{task.task.title}</span>
            </div>
            
            <div className="action">
                <button onClick={() => chengeHendler(task.task)}>Изменить</button>
                <button onClick={() => chengeHendler(task.task)}>Удалить</button>
            </div>
        </div>
    );
}
