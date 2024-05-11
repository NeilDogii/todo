import "../global-css/todoContainer.css";
function TodoContainer() {
  return (
    <div className="TodoContainer">
      <div className="status">
        <div className="status_logo">
          <img src="./done.svg" alt="checked" />
        </div>
        <div className="status_text">
          <p>Completed</p>
        </div>
      </div>
      <div className="status_subcontainer">
        <div className="status_topic">
          <textarea placeholder="topic..."/>
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
