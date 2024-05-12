import "../global-css/todoContainer.css";
import Draggable from 'react-draggable'
function TodoContainer() {
  return (
    <>
      <Draggable handle=".status" bounds={{ top: 10, left: 0 }}>
        <div className="TodoContainer" id="TodoMain">
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
              <textarea placeholder="topic..." />
            </div>
          </div>
          <div className="status_button_container">
            <div className="status_types">
              <select>

                <option value="fruit">Fruit</option>

                <option value="vegetable">Vegetable</option>

                <option value="meat">Meat</option>

              </select>
            </div>
            <div className="todoclose">
              <button>
                <img src="./cross.svg" alt="close" />
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    </>
  );
}

export default TodoContainer;
