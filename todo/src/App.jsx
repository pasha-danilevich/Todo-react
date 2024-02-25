import { Context } from "./context";

import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

export default function App() {
  const [activeItem, setActiveItem] = useState({
    id: null,
    title: '',
    complated: false,
    saved: false,
    editing: false,
  })


  
  return (
      <Context.Provider value={{ activeItem, setActiveItem }}>
          <Header />
          <TaskList />
      </Context.Provider>
  );
}
