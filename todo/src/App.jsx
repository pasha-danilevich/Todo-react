import { Context } from "./context";

import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

export default function App() {
  const [activeItem, setActiveItem] = useState()
  
  
  return (
      <Context.Provider value={{ activeItem, setActiveItem }}>
          <Header />
          <TaskList />
      </Context.Provider>
  );
}
