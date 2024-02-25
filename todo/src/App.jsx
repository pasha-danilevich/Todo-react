import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useState, useEffect } from "react";

export default function App() {
    const [activeItem, setActiveItem] = useState({
        id: null,
        title: "",
        complated: false,
        saved: false,
        editing: false,
    });
    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("App...");
    function handleChange(text) {
        setActiveItem({
            ...activeItem,
            title: text,
        });
        console.log(activeItem);
    }

    async function fetchTasks() {
        console.log("fetch...");
        const url = "http://127.0.0.1:8000/api/task-list/";
        setLoading(true);
        await fetch(url)
            .then((response) => response.json())
            .then((response) => setTaskList(response));
        setLoading(false);
    }
    

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <Header onSubmit={handleChange} />
            <TaskList taskList={taskList} loading={loading} />
        </>
    );
}
