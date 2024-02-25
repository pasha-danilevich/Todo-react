import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

import { useState, useEffect } from "react";

import { fetchTasks } from "./fetch";

export default function App() {
    const [activeItem, setActiveItem] = useState({
        id: null,
        title: "",
        complated: false,
        editing: false,
    });
    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("App...");

    async function load() {
        setLoading(true);
        setTaskList(await fetchTasks());
        setLoading(false);
    }

    function handleSubmit(bool) {
        load();
    }
    function handleClick(item){
      setActiveItem(item)
    }
    function handleChenge(item){
      setActiveItem(item)
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            <Header onSubmitCallBack={handleSubmit} activeItem={activeItem} handleChengeCallBack={handleChenge}/>
            <TaskList taskList={taskList} loading={loading} handleClickCallBack={handleClick} />
        </>
    );
}
