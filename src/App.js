import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Submit from "./components/Submit";
import WindowTracker from "./components/WindowTracker";

function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <button className='btn' onClick={toggle}>
        Show
      </button>
      <div className='wrapper'>
        <div className='App'>
          <Todo />
        </div>
        <span className='line-break'></span>
        <div className='App'>
          <Submit />
        </div>
        <span className='line-break'></span>
        <div className='App'>{show && <WindowTracker />}</div>
      </div>
    </>
  );
}

export default App;
