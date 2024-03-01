import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

import { useState, useEffect } from "react";

import { fetchTasks } from "./fetch";

export default function App() {
    // нужно вынести это состояние в header
    

    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log('render app')
    async function load() {
        setLoading(true);
        setTaskList(await fetchTasks());
        setLoading(false);
    }

    function handleSubmit(bool) {
        load();
        // setActiveItem({
        //     id: null,
        //     title: "",
        //     complated: false,
        //     editing: false,
        // });
    }
    function handleClick(item) {

      if (item == 'delete' || item == 'update'){
        load();
      }else{
        // setActiveItem(item);
      }
      
    }
    function handleChenge(item) {
        // setActiveItem(item);
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            <Header
                onSubmitCallBack={handleSubmit}
                // activeItem={activeItem}
                handleChengeCallBack={handleChenge}
            />
            <TaskList
                taskList={taskList}
                loading={loading}
                handleClickCallBack={handleClick}
            />
        </>
    );
}
