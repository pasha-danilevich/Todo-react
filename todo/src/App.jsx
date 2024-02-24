import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

export default function App() {
  const [listTasks, setTasks] = useState([]);


    return (
        <>
            <Header />
            <TaskList listTasks = {listTasks}/>
        </>
    );
}
