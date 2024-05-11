import "../global-css/navbar.css"
function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="./todo.png" alt="logo"/>
        </div>
        <div className="navbar_links">
            <a href="/">Home</a>
            <a href="/">Clear</a>
        </div>
    </div>
  );
}

export default Navbar;
