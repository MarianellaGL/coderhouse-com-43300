import "core-js";
import Componente from "./Componente";
import "./App.css";

function App() {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      <Componente array={array} />
    </div>
  );
}

export default App;
