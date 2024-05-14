//import logo from './logo.svg';
import './App.css';
//import Footer from './foot.jsx';
import TodoContainer from './components/TodoContainers.jsx';
import Navbar from './components/navbar.jsx'; 
//import { BrowserRouter, Routes, Route } from "react-router-dom";
const file = require("./todo.json");

// file.key = "new value";
    
// fs.writeFile("./todo.json", JSON.stringify(file), function writeJSON(err) {
//   if (err) return console.log(err);
//   console.log(JSON.stringify(file));
// });

function App() {
  return (
    <>
    <Navbar />
    <TodoContainer todo={file.todo}/>
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
