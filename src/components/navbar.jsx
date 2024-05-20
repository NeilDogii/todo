import "../global-css/navbar.css";

function Navbar() {
  const add_todo = new Event("add_todo");
  return (
    <div className="navbar">
      <div className="logo" onClick={() => window.dispatchEvent(add_todo)}>
        <img src="./todo.png" alt="logo" />
      </div>
      <div className="navbar_links">
        <div className="nav_btn" onClick={() => window.dispatchEvent(add_todo)}>
          {" "}
          add todo
        </div>
      </div>
    </div>
  );
}

export default Navbar;
