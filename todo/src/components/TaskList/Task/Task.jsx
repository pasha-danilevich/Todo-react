import { useContext } from "react";
import { Context } from "../../../context"; 

import "./Task.css";

export default function Task(task) {

    const contextValue = useContext(Context)

    function chengeHendler(obj){
        // добавить поле editing
        contextValue.setActiveItem(obj)
        console.log('task in hendler', contextValue.activeItem)
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
