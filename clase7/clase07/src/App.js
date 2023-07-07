import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/3")
      .then((response) => response.json())
      .then((res) => setCharacter(res))
      .catch((err) => console.error(err));
  }, [character]);

  return (
    <div className="App">
      <h1>{character?.name}</h1>
      <img src={character?.image} alt={character?.name} />
      <p>Status: {character?.status}</p>
      <p>Species: {character?.species}</p>
    </div>
  );
}

export default App;
