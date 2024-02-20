import "./Input.css";
import { useContext } from "react";
import { Context } from "../../../context";

export default function Input() {

    const contextValue = useContext(Context);

    
    // console.log(contextValue.task)

    
    function handleChenge(e) {
        // если contextValue.task.editing == true
        // то 
        contextValue.setTask({
            ...contextValue.task,
            title: e.target.value,
        })
        
        // else
        // Отдает e.target.value в callback on Change()
    }

    return (
        <input
            className="input"
            type="text"
            onChange={handleChenge}
            value={contextValue.task ? contextValue.task.title : ''}
            placeholder="Add task.."
        />
    );
}
