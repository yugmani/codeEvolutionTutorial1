import "./App.css";
import Welcome from "./Components/Welcome";
import Greet from "./Components/Greet";
import User from "./Components/User";
import Food from "./Components/Food";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";

function App() {
  return (
    <div className="App">
      <Welcome compo="Functional">
        <p>This is children prop.</p>
      </Welcome>
      <Greet compo="Class" />
      <h2>Users list</h2>
      <User name="Doris" />
      <User name="Moris" />
      <User name="Poris" />
      <h2>User's Favorite Foods</h2>
      <Food food="Pizza" />
      <Food food="Doritos" />
      <Food food="Green Salad" />
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
