import './App.css';
import TodoContainer from './components/TodoContainers.jsx';
import Navbar from './components/navbar.jsx'; 
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect,useState } from 'react';

function App() {
  const [todoList,setTodoList] = useState([Number(localStorage.getItem('todo'))]);
  let jsondata = {
    "test1": "test1", 
    "test2": "test2"
  }
  localStorage.setItem('todo_data',JSON.stringify(jsondata))
  console.log(JSON.parse(localStorage.getItem('todo_data')).test1)
  
  useEffect(() => {
    window.addEventListener('add_todo', event => {
      localStorage.setItem('todo',Number(localStorage.getItem('todo')) + 1)
      setTodoList(t => t.concat(Number(localStorage.getItem('todo'))));
    });
    window.addEventListener('deleteTodo', event => {
      document.getElementById("TodoMain_" + event.detail.ID).remove()
      //setTodoList(t => t.filter((i) => i !== event.detail.ID));
    })
  }, []);

  return (
    <>
    <Navbar/>
    <div className="todoListHolder">
    {todoList.map(e => <TodoContainer todo={e} />)}
    </div>
    </>
  );
}
//<Footer />
/*
<div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </header>
      <Footer />
    </div>
*/

export default App;
