import "./TaskList.css";
import Task from "./Task/Task";
import { fetchTasks } from "../../fetch";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function TaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);

    const [loading, setLoading] = useState(true);

    function load() {
        setLoading(true);
        dispatch(fetchTasks())
        setLoading(false);
    }
    useEffect(() => {
        load();
    }, []);

    return (
        <div className="wrapper">
            {loading && <p>Loading...</p>}

            {!loading && 
                tasks.map(function (task, index) {
                    return <Task key={`${index + task.title + task.id}`} task={task}/>;
                })}
        </div>
    );
}
