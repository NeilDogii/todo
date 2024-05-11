import "../global-css/todoContainer.css";
import Draggable from 'react-draggable'
import {Helmet} from "react-helmet";
function TodoContainer() {
  return (
    <>
    <Helmet>
      <script src="../global-js/Tododrag" type="text/babel" 
      crossorigin="anonymous"
      async
      />
      
    </Helmet>
    <Draggable  handle=".TodoContainer" bound="parent">
    <div className="TodoContainer" id="TodoMain">
      <div className="status">
        <div className="status_logo">
          <img src="./done.svg"  alt="checked" /> 
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
    </Draggable>
    </>
  );
}

export default TodoContainer;
