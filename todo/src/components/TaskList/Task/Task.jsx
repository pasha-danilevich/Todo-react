import { useContext } from "react";
import { Context } from "../../../context"; 

import "./Task.css";

export default function Task(task) {

    const contextValue = useContext(Context)

    function chengeHendler(obj){
        contextValue.setTask(obj)
        console.log('task in hendler', contextValue.task)
    }

    return (
        <div className="task">
            <div className="title">
                <span>{task.task.title}</span>
            </div>
            
            <div className="action">
                <button onClick={() => chengeHendler(task.task)}>Изменить</button>
                <button onClick={() => chengeHendler(task.task)}>Удалить</button>
            </div>
        </div>
    );
}
