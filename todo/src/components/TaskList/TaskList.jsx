import "./TaskList.css";
import Task from "./Task/Task";

import { fetchTasks } from "../../fetch";

import { useContext } from "react";
import { Context } from "../../context.js";



import { useState, useEffect } from "react";

export default function TaskList() {
    const [listTasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const contextValue = useContext(Context);
    console.log(contextValue.activeItem)
    
    async function load() {
        setLoading(true);
        setTasks( await fetchTasks());
        setLoading(false);
    }
    


    useEffect(() => {
        load();
    }, []);

    return (
        <div className="wrapper">
            <button onClick={load}></button>
            {loading && <p>Loading...</p>}
            
            {!loading && 
                listTasks.map(function (task, index) {
                    return (
                        // Передать key прям в сомпонент Task
                        // Убрать div
                        <div key={index}>
                            <Task task={task} />
                        </div>
                    );
                })}
        </div>
    );
}
