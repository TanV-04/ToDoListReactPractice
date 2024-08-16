import "./App.css";
import Tasks from "./components/ToDoForm";

function App() {
  return (
    <div className="App-header flex flex-col items-center pt-8">
      <h1 className="moderustic text-4xl font-bold mb-4">TO-DO LIST</h1>
      <Tasks />
    </div>
  );
}

export default App;
