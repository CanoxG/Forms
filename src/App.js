import "./App.css";
import Todo from "./components/Todo";
import Submit from "./components/Submit";

function App() {
  return (
    <>
      <header className="App-header">
        <Todo />
        <span className='line-break'></span>
        <Submit />
      </header>
    </>
  );
}

export default App;
