//import logo from './logo.svg';
import './App.css';
//import Footer from './foot.jsx';
import TodoContainer from './components/TodoContainers.jsx';
import Navbar from './components/navbar.jsx'; 
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <TodoContainer />
    
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
