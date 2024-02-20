import "./Input.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context";

export default function Input() {

    const contextValue = useContext(Context);

    
    console.log(contextValue.task)

    
    function handleChenge(e) {
        contextValue.setTask({
            ...contextValue.task,
            title: e.target.value,
        })
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
