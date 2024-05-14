import "../global-css/navbar.css"
import { useState } from "react";
function Navbar() {

async function clickhandler(){
    localStorage.setItem('todo',Number(localStorage.getItem('todo')) + 1)
}
  return (
    <div className="navbar">
        <div className="logo">
            <img src="./todo.png" alt="logo"/>
        </div>
        <div className="navbar_links">
            <a href="/">Home</a>
            <a href="/" onClick={()=>{clickhandler()}}>Clear</a>
        </div>
    </div>
  );
}

export default Navbar;
