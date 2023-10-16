import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todos />
      <h2 className="text-7xl font-mono font-semibold">Welcome </h2>
    </div>
  );
}

export default App;
