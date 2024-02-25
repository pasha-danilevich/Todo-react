import "./Input.css";
import { useContext } from "react";
import { Context } from "../../../context";

export default function Input() {

    const contextValue = useContext(Context);

    
    // console.log(contextValue.activeItem)

    
    function handleChenge(e) {
        // если contextValue.task.editing == true
        // то 
        contextValue.setActiveItem({
            ...contextValue.activeItem,
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
            value={contextValue.activeItem ? contextValue.activeItem.title : ''}
            placeholder="Add task.."
        />
    );
}
