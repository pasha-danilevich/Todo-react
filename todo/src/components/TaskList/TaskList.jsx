import "./TaskList.css";
import Task from "./Task/Task";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/taskSlice";

export default function TaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error)



    useEffect(() => {
        dispatch(fetchTasks())
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
