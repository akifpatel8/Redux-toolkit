import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { store } from "./app/store";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Redux toolkit for Todo</h1>
        <AddTodo />
        <Todos/>
      </Provider>
    </div>
  );
}

export default App;
