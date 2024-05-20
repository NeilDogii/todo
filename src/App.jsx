import "./App.css";
import TodoContainer from "./components/TodoContainers.jsx";
import Navbar from "./components/navbar.jsx";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [todoData, setTodoData] = useState(
    JSON.parse(localStorage.getItem("todo_data"))
  );
  useEffect(() => {
    window.addEventListener("add_todo", (event) => {
      let newdata = {
        message: "",
        status: "pending",
        cods: { x: 0, y: 0 },
        ID: Number(localStorage.getItem("todo")),
      };
      localStorage.setItem("todo", Number(localStorage.getItem("todo")) + 1);
      localStorage.setItem(
        "todo_data",
        JSON.stringify(
          JSON.parse(localStorage.getItem("todo_data")).concat(newdata)
        )
      );
      setTodoData((t) => t.concat(newdata));
    });
    window.addEventListener("deleteTodo", (event) => {
      console.log(event.detail.ID);
      document.getElementById("TodoMain_" + event.detail.ID).remove();
      let data = JSON.parse(localStorage.getItem("todo_data"));
      localStorage.setItem(
        "todo_data",
        JSON.stringify(data.filter((i) => i.ID !== event.detail.ID))
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="todoListHolder">
        {todoData.map((e) => (
          <TodoContainer
            todo={e.ID}
            message={e.message}
            status={e.status}
            cods={e.cods}
          />
        ))}
      </div>
    </>
  );
}

export default App;
