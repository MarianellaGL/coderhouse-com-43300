import logo from "./logo.svg";
import "./App.css";
import TestingMap from "./Components/TestingMap";

function App() {
  function doYouLoveMe(name) {
    return new Promise(function (resolve, reject) {
      console.log("dejame pensarlo...");
      setTimeout(() => {
        if (name === "Alberto") {
          resolve("Si!");
        } else {
          reject("Perdón, pero no!");
        }
      }, 1000);
    });
  }

  /*   const lovePromise = doYouLoveMe("Juan");
  lovePromise
    .then((response) => console.log(response))
    .catch((error) => console.error(error)); */

  const lovePromise = async () => {
    let response = await doYouLoveMe("Alberto");
    console.log(response);
    return response;
  };

  lovePromise();

  return (
    <div className="App">
      <TestingMap />
    </div>
  );
}

export default App;
