import "./TaskList.css";

import Task from "./Task/Task";

import { useState, useEffect } from "react";

export default function TaskList() {

    const [listTasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
 
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === name + "=") {
                    cookieValue = decodeURIComponent(
                        cookie.substring(name.length + 1)
                    );
                    break;
                }
            }
        }
        return cookieValue;
    }
    

    async function fetchTasks() {

        setLoading(true);

        const url = "http://127.0.0.1:8000/api/task-list/";
        const response = await fetch(url);
        const data = await response.json();

        setTasks(data);
        setLoading(false);

    }
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        
        <div className="wrapper">
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
                })
            }
        </div>
    );
}
