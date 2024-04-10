import React from "react";
import { ToDoProvider } from "./contexts/ToDoContext";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

const App = () => {
  return (
    <ToDoProvider>
      <div>
        <h1>ToDo App</h1>
        <ToDoForm />
        <ToDoList />
      </div>
    </ToDoProvider>
  );
};

export default App;
