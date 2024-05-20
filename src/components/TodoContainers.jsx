import "../global-css/todoContainer.css";
import Draggable from "react-draggable";
import { useEffect, useState } from "react";

function TodoContainer(props) {
  const [status, setStatus] = useState(props.status);
  const [logo, setLogo] = useState("./done.svg");
  const [message, setMessage] = useState(props.message);
  const [disabled, setDisabled] = useState(true);
  const [cods, setCods] = useState({ x: props.cods.x, y: props.cods.y });
  const event = new CustomEvent("deleteTodo", { detail: { ID: props.todo } });

  async function handleMessage(msg) {
    setMessage(msg);
    let data = JSON.parse(localStorage.getItem("todo_data"));
    data.find((e) => e.ID === props.todo).message = msg;
    localStorage.setItem("todo_data", JSON.stringify(data));
  }
  async function handleDrag(c) {
    let x_cods = c.x - 150;
    let y_cods = c.y - 100;
    //let elem = document.getElementById("drag");
    //let css = getComputedStyle(elem)
    //console.log(css.transform.split(",")[4], css.transform.split(",")[5].split(")")[0])

    setCods((cod) => ({
      ...cod,
      ...{ x: x_cods, y: y_cods },
    }));
    let data = JSON.parse(localStorage.getItem("todo_data"));
    data.find((e) => e.ID === props.todo).cods = {
      x: x_cods,
      y: y_cods,
    };
    localStorage.setItem("todo_data", JSON.stringify(data));
  }

  async function logoSelect(data) {
    switch (data) {
      case "Completed":
        setLogo("./done.svg");
        break;
      case "In-Progress":
        setLogo("./inprogress.svg");
        break;
      case "Pending":
        setLogo("./pending.svg");
        break;
      case "Urgent":
        setLogo("./urgent.svg");
        break;
      case "Paused":
        setLogo("./paused.svg");
        break;
      default:
        setLogo("./done.svg");
    }
  }

  async function handleClick(s) {
    setStatus(s);
    let data = JSON.parse(localStorage.getItem("todo_data"));
    data.find((e) => e.ID === props.todo).status = s;
    localStorage.setItem("todo_data", JSON.stringify(data));
    setDisabled(!disabled);
    logoSelect(s);
  }

  useEffect(() => {
    logoSelect(status);
  }, []);

  return (
    <div id={`TodoMain_${props.todo}`}>
      <Draggable
        handle=".status"
        bounds={{ top: 10, left: 5 }}
        position={cods}
        onDrag={(e) => handleDrag(e)}
      >
        <div className="TodoContainer" id="drag">
          <div className="status">
            <div className="status_logo">
              <img src={logo} alt="checked" />
            </div>
            <div className="status_text">
              <p>{status}</p>
            </div>
          </div>
          <div className="status_subcontainer">
            <div className="status_topic">
              <textarea
                placeholder="topic..."
                value={message}
                onChange={(e) => handleMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="status_button_container">
            <div
              className="status_types"
              onClick={() => setDisabled(!disabled)}
            >
              <p>Change status</p>
            </div>
            <div
              className="todoclose"
              onClick={() => window.dispatchEvent(event)}
            >
              {/* <img src="./cross.svg" alt="close" /> */}
            </div>
          </div>
          <div className="options" disabled={disabled}>
            <div
              className="option"
              id="completed"
              onClick={() => handleClick("Completed")}
            >
              <p>Completed</p>
            </div>
            <div
              className="option"
              id="inprogress"
              onClick={() => handleClick("In-Progress")}
            >
              <p>In-progress</p>
            </div>
            <div
              className="option"
              id="pending"
              onClick={() => handleClick("Pending")}
            >
              <p>Pending</p>
            </div>
            <div
              className="option"
              id="urgent"
              onClick={() => handleClick("Urgent")}
            >
              <p>Urgent</p>
            </div>
            <div
              className="option"
              id="paused"
              onClick={() => handleClick("Paused")}
            >
              <p>Paused</p>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default TodoContainer;
