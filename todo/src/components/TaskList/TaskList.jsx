import "./TaskList.css";
import Task from "./Task/Task";

import { useState, useEffect } from "react";

export default function TaskList({ taskList, loading, handleClickCallBack }) {


    function handleClick(item){
        handleClickCallBack(item)
    }

    return (
        <div className="wrapper">
            {loading && <p>Loading...</p>}

            {!loading &&
                taskList.map(function (task, index) {
                    return <Task key={index} task={task} onClickCallBack={handleClick}/>;
                })}
        </div>
    );
}
