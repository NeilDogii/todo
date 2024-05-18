import "../global-css/todoContainer.css";
import Draggable from 'react-draggable'
import { useState } from "react";

function TodoContainer(props) {
  const [status, setStatus] = useState("Pending");
  const [disabled, setDisabled] = useState(true)
  const event = new CustomEvent("deleteTodo", {detail: {ID: props.todo}});

  async function handleClick(s) {
    setStatus(s);
    setDisabled(!disabled);
  }
  return (
    <div id={`TodoMain_${props.todo}`} >
      <Draggable handle=".status" bounds={{ top: 10}}>
          <div className="TodoContainer" >
            <div className="status">
              <div className="status_logo">
                <img src="./done.svg" alt="checked" />
              </div>
              <div className="status_text">
                <p>{status}</p>
              </div>
            </div>
            <div className="status_subcontainer">
              <div className="status_topic">
                <textarea placeholder="topic..." />
              </div>
            </div>
            <div className="status_button_container">
              <div className="status_types" onClick={() => setDisabled(!disabled)}>
                <p>Change status</p>
              </div>
              <div className="todoclose" onClick={() => window.dispatchEvent(event)}>
                {/* <img src="./cross.svg" alt="close" /> */}
              </div>
            </div>
            <div className="options" disabled={disabled}>
                <div className="option" id="completed" onClick={() => handleClick("Completed")}>
                  <p>Completed</p>
                </div>
                <div className="option" id="inprogress" onClick={() => handleClick("In-Progress")}>
                  <p>In-progress</p>
                </div>
                <div className="option" id="pending" onClick={() => handleClick("Pending")}>
                  <p>Pending</p>
                </div>
                <div className="option" id="urgent" onClick={() => handleClick("Urgent")}>
                  <p>Urgent</p>
                </div>
                <div className="option" id="paused" onClick={() => handleClick("Paused")}>
                  <p>Paused</p>
                </div>
              </div>
          </div>
      </Draggable>
    </div>
  );
}

export default TodoContainer;
