import { Context } from "./context";

import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState()

  
  return (
      <Context.Provider value={{ task, setTask }}>
          <Header />
          <TaskList />
      </Context.Provider>
  );
}
