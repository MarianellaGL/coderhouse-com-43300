import logo from "./logo.svg";
import "./App.css";

function App() {
  /** ------------------------spread operator------------------- */
  /** ejemplo 1 */

  const obj = { nombre: "Juan" };
  const obj2 = { apellido: "Abel" };

  const combObj = { ...obj, ...obj2 };
  console.log(combObj);

  /** ejemplo 2 */
  const animales = ["perro", "gato", "liebre"];
  const copiaArray = [...animales];
  console.log(copiaArray);
  /** ejemplo 3 */

  const civilizaciones = ["Egipcia", "Griega", "Babilonica"];
  const nuevaCivilizaciones = [...civilizaciones, "Romana"];
  console.log(nuevaCivilizaciones);

  /** ejemplo 4 */
  const agregarNuevaPropiedad = { ...combObj, edad: 33 };
  console.log("lllllllll", agregarNuevaPropiedad);

  /** Métodos de Array */
  /**filter */
  const numbers = [1, 2, 3, 4, 5];
  const filteredNumbers = numbers.filter((num) => num % 2 === 0);

  console.log(filteredNumbers);

  /** map */
  const superHeroes = ["Spiderman", "Superman", "Batman"];

  const heroesMap = superHeroes.map((name, index) => (
    <li key={index}>{name}</li>
  ));

  /** reduce */

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  /** find */
  const findSuper = superHeroes.find((heroe) => heroe === "Spiderman");

  /**-----------------destructuring---------- */
  const [first, second, third] = numbers;
  const { nombre, apellido } = combObj;

  return (
    <div className="App">
      <ul>{heroesMap}</ul>
      <h1>{sum}</h1>
      <p>El mejor héroe es {findSuper}</p>
      <h1>
        {first} {second} {third}
      </h1>
      <h1>
        {nombre} {apellido}
      </h1>
    </div>
  );
}

export default App;
